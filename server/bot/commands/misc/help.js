const genericCommand = require('../../commandTypes/GenericCommand.js');
const Discord = require('discord.js');
module.exports = new genericCommand({
  triggers: ["help", "he", "h"],
  usage: "{command} <commandName>",
  bypass: true,
}, async({Bobb, message, args}) => {
  if(args[0]) {
  let command = Bobb.cmds.find(c => c.props.triggers.includes(args[0].toLowerCase()));
    if(!command) return "I could not find that command. Try running the `help` command by itself and see a list of commands."
 const embed = new Discord.MessageEmbed()
 .setTitle(`Information on ${Bobb.misc.capitalize(command.props.triggers[0])}`)
    .setDescription(`Triggers: ${command.props.triggers.join(" | ")}`)
 .addField("Usage: ", `${command.props.usage}`, true)
 .setTimestamp()
.setFooter(":)");
    return embed;
  } else {
    let allCommands = Bobb.cmds.map(c => `**${c.props.triggers[0]}** - Category: ${c.category}`);
  const embed = new Discord.MessageEmbed()
  .setTitle("Commands")
  .setDescription(allCommands.join('\n'))
  .setTimestamp()
  .setFooter(':)');
 return embed;
  };
  return 'Ok'
});