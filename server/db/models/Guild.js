const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
  guild: { type: String, required: true },
  guildID: { type: String, required: true },
  prefix: { type: String, default: "a!" },
  disabledCategories: {type: Array, default: []},
  disabledCommands: {type: Array, default: []},
  enabledCommands: {type: Array, default: []}
});
module.exports = mongoose.model("Guild", guildSchema);