const genericCommand = require('../../commandTypes/GenericCommand.js');

module.exports = new genericCommand({
  triggers: ["verify"],
  minArgs: 1,
  usage: "{command} [UUID]",
  missingArgs: "Missing the UUID.",
  dmOnly: true,
cooldown: 4500,
}, async({Bobb, message, args, addCD}) => {
  addCD(); 
  let pos = await Bobb.mongo.Person.findOne({UUID: args[0]});
  
  let upd = {
    discID: message.author.id,
    discTag: message.author.tag,
    verified: true
  };
  if(pos) {
    if(pos.discTag) return `You have already linked your Discord account.`
    await Bobb.db.updateMember({UUID: args[0]}, upd);
    return `Verification successful. Thank you for linking!`

  } else {
    return `Verification unsuccessful. Please find your UUID by going to the Website > Account > Discord`
  }
});