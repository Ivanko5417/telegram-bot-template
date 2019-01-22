const { DATABASE_DOCUMENTS } = require('app.constants');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Chat = new Schema({
  chatId: {
    type: Number,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['private', 'group', 'supergroup', 'channel'],
  },
  createdOn: {
    type: Date,
    required: true,
    default: new Date(),
  },
  userId: {
    type: Number,
  },
  photo: {
    smallFileId: {
      type: String,
    },
    bigFileId: {
      type: String,
    },
  },
  title: { type: String },
  allMembersAreAdministrators: { type: Boolean },
  description: { type: String },
  inviteLink: { type: String },
  stickerSetName: { type: String },
  canSetStickerSet: { type: Boolean },
});

module.exports = mongoose.model(DATABASE_DOCUMENTS.CHAT, Chat);

