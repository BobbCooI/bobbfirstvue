const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {type: String}, // WEBSITE
  loweruser: {type: String},  // WEBSITE
  userID: {type: String}, // WEBSITE
  discTag: {type: String}, // DISCORD
  discID: {type: String}, // DISCORD
  verified: {type: Boolean}, // DISCORD - WEBSITE
  cmdsRan: {type: Number},
  lastCmd: {type: Date},
  email: {type: String}, // WEBSITE
  ePassword: {type: String},   // WEBSITE
 hPassword: {type: String},
  UUID: {type: String},   // WEBSITE
  dateCreate: {type: Date}, // WEBSITE
  cmdSpam: {type: Number} // DISCORD
});

     

module.exports = mongoose.model('user', userSchema);