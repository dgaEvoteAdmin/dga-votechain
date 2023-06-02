import dayjs from "dayjs"

import TopicModel from "~/src/models/topic"
import { getVotesByTopicId } from "~/src/services/fetch/vote"
import { getVoterAllowByTopicId } from "~/src/services/fetch/vote-allow"
import { isAdminRole } from "~/src/utils/role"
import { isTopicPause } from "~/src/services/fetch/topic-ctrl-pause"

export default defineEventHandler(async (event) => {  
  const topicDoc = await TopicModel.findById(event.context.params?.id);
  if(!topicDoc) {
    throw createError({
      statusCode: 404,
      statusMessage: "Topic not found",
    });
  }
  
  const topicPauseFlag = await isTopicPause(topicDoc._id);

  if(topicDoc.status !== "approved") {
    throw createError({
      statusCode: 404,
      statusMessage: "Topic not approved",
    });
  } else if(topicPauseFlag || topicDoc.voteExpiredAt.getTime() >= Date.now()) {
    throw createError({
      statusCode: 404,
      statusMessage: "Topic not expired",
    });
  }

  const userData = event.context.userData;
  const [votersData, votes] = await Promise.all([
    getVoterAllowByTopicId(topicDoc._id).populate("userid"),
    getVotesByTopicId(topicDoc._id)
  ]);
    
  if(!topicDoc.publicVote) {
    if(!userData) {
      throw createError({
        statusCode: 403,
        statusMessage: "Forbidden",
      });
    }

    const topicAllowDoc = votersData.find((ele) => ele.userid && ele.userid.toString() === userData._id.toString())
    if(!topicAllowDoc) {
      throw createError({
        statusCode: 403,
        statusMessage: "Forbidden",
      });
    }
  }

  const scores : TopicVoteCountRecord[] = [];
  for(const vote of votes) {
    const target = scores.find((ele) => ele.choice === vote.choice);
    if(target) {
      target.count += 1;
    } else {
      scores.push({ choice: vote.choice, count: 1 })
    }
  }
  scores.sort((a, b) => b.count - a.count);
  
  let yourVotes: ChoiceDataType[] = [];
  if(userData) {
    const _yourVotes = votes.filter((ele) =>  ele.userid && ele.userid.toString() === userData._id.toString());
    yourVotes = _yourVotes.map((ele) => ele.choice)
  }

  const voterTotal = votersData.length + votes.filter((ele) => !ele.userid).length;
  const voterVoted =  voterTotal - votersData.filter((ele) => ele.remainVotes >= ele.totalVotes).length;
  
  const voteResult : TopicResultResponse = {
    _id: `${topicDoc._id}`,
    name: topicDoc.name,
    description: topicDoc.description,
    choices: topicDoc.choices,
    voteStartAt: dayjs(topicDoc.voteStartAt).toString(),
    voteExpiredAt: dayjs(topicDoc.voteExpiredAt).toString(),
    createdAt: dayjs(topicDoc.createdAt).toString(),
    updatedAt: dayjs(topicDoc.updatedAt).toString(),
    yourVotes: userData ? yourVotes : undefined,
    stats: {
      voters: {
        total: voterTotal,
        voted: voterVoted,
      },
      votes: {
        quota: votersData.reduce((prev, current) => current.totalVotes + prev, 0),
        actual: votes.length,
      }
    },
    scores,
  }

  if(isAdminRole(userData?.roleMode)) {
    voteResult.voters = votersData.map((ele) => {
      const user = (ele.userid as unknown as UserModelDataWithId);
      return {
        user: {
          _id: user._id.toString(),
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        totalVotes: ele.totalVotes,
        remainVotes: ele.remainVotes,
      };
    });
  }

  return {
    voteResult,
  }
})