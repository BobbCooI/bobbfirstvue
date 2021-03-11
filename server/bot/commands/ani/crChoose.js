const GenericCommand = require('../../commandTypes/GenericCommand.js');
const Discord = require('discord.js');
module.exports = new GenericCommand({
  triggers: ["crchoose", "cchoose", "crunchychoose"],
  usage: "{command} {choice}",
}, async({Bobb, message, addCD, args}) => {
  let person = Bobb.client.aniCache[message.author.id];
  if(!person) return 'Please start by choosing an anime with the command `a!crSearch <term(s)>`';
  let choice = person.choose(args[0]);

  if(choice.success === false) return `Error: ${choice.error}`;
  else {
         person = Bobb.client.aniCache[message.author.id];
    let emb = new Discord.MessageEmbed()
    .setTitle(person.choiceTitle)
    .setDescription(`Success! The title ID is ${choice}`)
    .addField(`Final step command: a!crGetEp ${choice} 2`, 'This would fetch the 2nd episode of the anime.')
    .setFooter('Make sure the selected anime episode of the season is correct!')
    .setTimestamp()
    .setColor(Math.floor(Math.random() * 0xffffff));
await message.channel.send(emb);
  return;
  }
})