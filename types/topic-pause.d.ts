import { Model, Query, Types } from "mongoose";

declare global {
  interface TopicPauseData {
    topicid: Types.ObjectId;
    pauseAt: Date;
    resumeAt?: Date;
  }

  interface TopicPauseModel extends Model<TopicPauseData> {
  
  }

  type TopicPauseResponseData = Omit<TopicPauseData, "topicid" | "pauseAt" | "resumeAt"> & {
    topicid: string;
    pauseAt: DateString;
    resumeAt?: DateString;
  }
}