const mongoose = require("mongoose");

const statSchema = new mongoose.Schema({
  usersCreated: {type: Number, default: 0}, // WEBSITE ACCOUNTS
  usersVerified: {type: Number, default: 0}, // DISCORD VERIFIED IN SERVER
  messages: {type: Number, default: 0},
  commands: {type: Number, default: 0},
  guildsJoined: {type: Number, default: 0},
  guildsLeft: {type: Number, default: 0},
  errReported: {type: Number, default: 0},
  err: {type: Number, default: 0},
  websiteVisits: {type: Number, default: 0},
  webRequests: {type: Number, default: 0}
});

module.exports = mongoose.model("botStats", statSchema);