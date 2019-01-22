const { DATABASE_DOCUMENTS } = require('app.constants');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  isBot: {
    type: Boolean,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
    default: new Date(),
  },
  lastName: { type: String },
  username: { type: String }
});

User.methods.getFullName = function() {
  const { firstName, lastName = ''} = this;
  return `${firstName} ${lastName}`;
};

module.exports = mongoose.model(DATABASE_DOCUMENTS.USER, User);

