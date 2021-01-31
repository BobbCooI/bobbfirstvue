const mongoose = require("mongoose");

const statSchema = new mongoose.Schema({
  messages: {type: Number, default: 0},
  commands: {type: Number, default: 0},
  guildsJoined: {type: Number, default: 0},
  guildsLeft: {type: Number, default: 0},
  errReported: {type: Number, default: 0},
  err: {type: Number, default: 0}
});

module.exports = mongoose.model("botStats", statSchema);