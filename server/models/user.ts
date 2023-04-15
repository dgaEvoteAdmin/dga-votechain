import { model, Schema } from "mongoose";

const schema = new Schema<UserData>({
  version: {
    type: Number,
    default: 1,
  },
  permissions: [String],
  authSources: [new Schema({
    authSource: {
      type: String,
      required: true,
    },
    digitalIdUserId: {
      type: String
    },
  })],
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  citizenId: {
    type: String,
  },
}, {
  timestamps: true,
  query: {
    byDigitalIdUserId(digitalIdUserId: DigitalIDUserId) {
      return this.where("authSources")
        .elemMatch("authSource").equals("digitalId")
        .elemMatch("digitalIdUserId").equals(digitalIdUserId)
    }
  }
});

export default model('dga-user', schema);