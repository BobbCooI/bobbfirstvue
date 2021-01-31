const Discord = require('discord.js');


async function logger (message, name = 'log') {
  const date = Date().toString().split(' ').slice(1, 5).join(' ');
  message = message instanceof Object ? require('util').inspect(message) : message;
//console.log('logger', this)
  
  let chan =  await this.client.channels.cache.get('793650413865009152');
  let embed = new Discord.MessageEmbed()
 .setTitle(name)
  .addField(`[${date}]`, message, false)
 .setTimestamp()
 .setColor('ORANGE');
await chan.send(embed).catch(e => console.log(message));
}
module.exports = logger;