import { model, Schema } from "mongoose";

const schema = new Schema<UserModelData>({
  permissions: [String],
  authSources: [new Schema({
    authSource: {
      type: String,
      required: true,
    },
    digitalIdUserId: {
      type: String
    },
    thaIDUserId: {
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
  isGovOfficer: {
    type: Boolean,
  },
  ministry: {
    type: String,
  },
  department: {
    type: String,
  },
  division: {
    type: String,
  },
  cidHashed: {
    type: String,
  },
  preferences: new Schema({
    topMenu: new Schema({
      voter: [String],
      admin: [String],
      dev: [String],
    }),
  }),
  removeAt: {
    type: Date,
  },
  removed: {
    type: Boolean,
  },
}, {
  timestamps: true,
});

export default model('dga-user', schema);
