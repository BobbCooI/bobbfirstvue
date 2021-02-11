const GenericCommand = require('../../commandTypes/GenericCommand.js');

module.exports = new GenericCommand({
  triggers: ["ping", "pong"],
  usage: "{command}",
  bypass: true
}, async({Bobb, message}) => {
  return `🏓 Pong! ${ new Date - message.createdTimestamp}`
})