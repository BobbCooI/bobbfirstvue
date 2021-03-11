const GenericCommand = require('../../commandTypes/GenericCommand.js');
const Discord = require('discord.js');
module.exports = new GenericCommand({
  triggers: ["crgetep", "cgetep", "crunchygetep"],
  usage: "{command} {1-3 or 1,2,3 or latest}",
}, async({Bobb, message, addCD, args}) => {
  let st = new Date;
let person = Bobb.client.aniCache[message.author.id];
  if(!person) return 'Please start by choosing an anime with the command `a!crSearch <term(s)>`';
  
  let epFromId = await person.getShowById(person.choiceId, args.slice(1).join('').toString());
if(epFromId.success === false) return `${epFromId.errors}`;
else {
  for(let ep in epFromId.epMedia) {
    let emb = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random() * 0xffffff))
    .setTitle(`${person.choiceTitle} | ${epFromId.epMedia[ep].epTitle}`)
    .setDescription(`Episode Number: ${ep}`)
    .addField(`HLS Stream: `, epFromId.epMedia[ep].hlsStream, true)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`)
    await message.channel.send(emb);
}
  }
    
  return `Finished! Time taken: ${Bobb.misc.timeMili(new Date - st)}`
/*  return {
  title: `Episodes chosen: ${epFromId.selData.eps}`,
  description: Bobb.misc.chunkSubstr(epFromId, 1940)
  }*/
});