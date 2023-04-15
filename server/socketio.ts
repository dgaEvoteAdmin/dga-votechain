import { Server } from "socket.io";

import { getSessionData } from "~~/server/session-handler";

import UserModel from "~~/server/models/user";
import TopicModel from "~~/server/models/topic";
import TopicPauseModel from "~~/server/models/topic-pause";
import NotificationModel from "~~/server/models/notification";
import TopicNotificationModel from "~~/server/models/topic-notifications";
import dayjs from "dayjs";
import { checkPermissionNeeds } from "../src/utils/permissions";
import { getNotifyData, setNotifyData } from "./notify-storage";
import { getEventEmitter } from "./global-emitter";
import mongoose from "mongoose";

export default () => {
  const { SOCKETIO_ORIGIN_URL } = useRuntimeConfig();
  
  const io = new Server({
    cors: {
      origin: [SOCKETIO_ORIGIN_URL]
    }
  });

  const eventEmitter = getEventEmitter();
  eventEmitter.on("voted", async ({ id, votes } : { id: string, votes: Array<VoteResponseData> }) => {
    io.emit("voted", votes);
    const txChain : Array<TxResponseData> = votes.map((tx) => {
      return {
        _id: `${tx._id}`,
        userid: `${tx.userid}`,
        topicid: `${tx.topicid}`,
        choice: tx.choice,
        createdAt: dayjs(tx.createdAt).toString(),
      }
    });
    io.emit("tx", txChain);
  });
  
  async function emitServerTime() {
    const time = new Date();
    console.log("IO", time);
    io.emit("ntpTime", time.toISOString());
  }

  io.on("connection", (socket) => {
    console.log("[SocketIO] connected", socket.id);
    
    socket.on("syncTime", emitServerTime);
    
    socket.on("hasNotify", async ({sid} : {sid: string}) => {
      const userData = await getSessionData(sid);
      if(!userData) {
        return;
      }
      let notifyData = await getNotifyData(userData._id.toString());
      
      if(notifyData === undefined || Date.now() - notifyData.lastChecked >= 60000) {
        const [unreadNoti, unreadTopicNoti] = await Promise.all([
          NotificationModel.getLastestUnreadNotifications(userData._id, 1),
          TopicNotificationModel.getLastestUnreadNotifications(userData._id, 1)
        ]);
        
        notifyData = {
          unread: (unreadNoti.length + unreadTopicNoti.length) > 0,
          lastChecked: Date.now(),
        };
        
        await setNotifyData(userData._id.toString(), notifyData);
      }
      
      socket.emit(`hasNotify/${sid}`, notifyData);
    });

    socket.on("pauseVote", async ({userid, topicId} : {userid: string, topicId?: string}) => {
      const [userData, targetTopic] = await Promise.all([
        UserModel.findById(userid),
        TopicModel.findById(topicId)
      ]);
      if(!userData || !targetTopic || !checkPermissionNeeds(userData.permissions, "change-topic")) {
        return;
      }
      
      let lastestPauseData = await TopicPauseModel.findOne({
        topicid: targetTopic._id,
        resumeAt: { $exists: false }
      })
      if(!lastestPauseData) {
        lastestPauseData = new TopicPauseModel({
          topicid: targetTopic._id,
          pauseAt: new Date(),
        })
        
        await lastestPauseData.save()
  
        socket.emit(`pauseVote/${topicId}`, {
          topicid: lastestPauseData.topicid,
          pauseAt: dayjs(lastestPauseData.pauseAt).toISOString(),
        });
      }
    })
  
    socket.on("resumeVote", async ({userid, topicId} : {userid: string, topicId?: string}) => {
      const dbSession = await mongoose.startSession();
      dbSession.startTransaction();

      const [userData, targetTopic] = await Promise.all([
        UserModel.findById(userid),
        TopicModel.findById(topicId)
      ]);
      if(!userData || !targetTopic || !checkPermissionNeeds(userData.permissions, "change-topic")) {
        return;
      }
      
      let lastestPauseData = await TopicPauseModel.findOne({
        topicid: targetTopic._id,
        resumeAt: { $exists: false }
      })
      if(lastestPauseData) {
        lastestPauseData.resumeAt = new Date();
        targetTopic.voteExpiredAt = dayjs(new Date()).add(dayjs(targetTopic.voteExpiredAt).diff(lastestPauseData.pauseAt)).toDate()
        
        await Promise.all([
          lastestPauseData.save(),
          targetTopic.save()
        ]);

        await dbSession.commitTransaction();
        await dbSession.endSession();

        socket.emit(`resumeVote/${topicId}`, {
          topicid: lastestPauseData.topicid,
          pauseAt: dayjs(lastestPauseData.pauseAt).toISOString(),
          resumeAt: dayjs(lastestPauseData.resumeAt).toISOString(),
          voteExpiredAt:  targetTopic.voteExpiredAt.toISOString(),
        });
      }
    })
  });
  
  io.listen(3059);
};