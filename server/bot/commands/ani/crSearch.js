const GenericCommand = require('../../commandTypes/GenericCommand.js');
module.exports = new GenericCommand({
  triggers: ["crsearch", "csearch", "crunchysearch"],
  usage: "{command} {searchTerm}",
}, async({Bobb, message, addCD, args}) => {
  if(Bobb.client.aniCache[message.author.id]) delete Bobb.client.aniCache[message.author.id];
   let startTime = new Date().getTime();
  let base = Bobb.client.aniCache[message.author.id] = new Bobb.Crunchy(message.author.id);
  let auth = await base.login();

  let search = await base.search(args);
  let en = new Date().getTime();
console.log(search.join('\n'));
if(search.success === false) return search.error;
else return {
  title: 'Choices',
  description: search.join('\n'),
  footer: `Time taken: ${Bobb.misc.timeMili(en-startTime)} - You can choose like this: a!crChoose 1st`
}
  console.log(timeMili(en - startTime), en - startTime);
  return `🏓 Pong! ${ new Date - message.createdTimestamp}`
})