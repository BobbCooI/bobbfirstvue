const fs =require('fs');
const errors = {
  // Voice related errors
  Disconnected: `Discord fucked something up. 😠\n\nTo fix this, you have to got to server settings and change the voice region.\nIf it still doesn't work after that, join (<https://discord.gg/Wejhbd4>) and tell support it is error \`vc1\`.`,

  "Voice connection timeout": `Discord fucked something up. 😠\n\nTo fix this, first try running \`pls stop\`.\nIf that doesn't work, you have to kick me and reinvite me back. I know, it is stupid. 🙄\nIf it still doesn't work after that, join (<https://discord.gg/Wejhbd4>) and tell support it is error \`vc2\`.`,

  "Already encoding": `Something fucked up. 😠\n\nWe're pretty sure this error happens when you're running voice commands too quickly. So slow down 🙄\nIf it's still happening after a while, (<https://discord.gg/Wejhbd4>) and tell support it is error \`vc3\`.`,

  // Currency Errors
  new_val: `Oopsy doopsy, we made a fucky wucky! 😊\n\nThis shouldn't happen to you again, and we are working semi-hard on fixing it. \nIf it DOES happen again, join (<https://discord.gg/Wejhbd4>) and tell support it is error \`econ1\`.`,

  // Image Errors
  "Invalid character in header content": `Well heck, I didn't like some character you used for this command! 😠\n\nIf you used any "not normal" characters for this command, remove those and try again. \nIf it is still happening, join (<https://discord.gg/Wejhbd4>) and tell support it is error \`img1\`.`,

  "socket hang up": `Looks like we just restarted our image server\n\nOnce it is done rebooting, this command will work again. Give it just a few seconds!\nIf it is still happening after multiple minutes, join (<https://discord.gg/Wejhbd4>) and tell support it is error \`img2\`.`,

  // Discord Errors
  "DiscordRESTError [50001]: Missing Access": `Hey! For some reason I don't have permission to run that command. 😠\n\nMake sure you have given me the correct channel perms to run this command. \nIf it is still happening after messing with permissions, join (<https://discord.gg/Wejhbd4>) and tell support it is error \`dis1\`.`,

  "Request timed out (>15000ms) on POST": `aggggghhhhhhhh discord is having connection issues 😠\n\nAll we can do is wait until they're better. Sorryyyyyy.\nIf it is still happening after a few hours, join (<https://discord.gg/Wejhbd4>) and tell support it is error \`dis2\`.`,

  "DiscordRESTError [50013]: Missing Permissions": `Hey! For some reason I don't have permission to run that command. 😠\n\nMake sure you have given me the correct channel perms to run this command. \nIf it is still happening after messing with permissions, join (<https://discord.gg/Wejhbd4>) and tell support it is error \`dis3\`.`,

  "Must be 2000 or fewer in length": `You included too many characters in that.\n\nI am only able to send 2k characters in one message, so please try again with less characters.\nIf it is still happening, join (<https://discord.gg/Wejhbd4>) and tell support it is error \`dis4\`.`,

  "DiscordHTTPError: 500 INTERNAL SERVER ERROR on POST": `aggggghhhhhhhh discord is having connection issues 😠\n\nAll we can do is wait until they're better. Sorryyyyyy.\nIf it is still happening after a few hours, join (<https://discord.gg/Wejhbd4>) and tell support it is error \`dis5\`.`,

  // Known Errors
  "Cannot read property 'triggers' of undefined": `This command is currently under maintenance, sorry :(\n\nIt will work if you are spelling the command you are enabling/disabling correctly.\nIf it is still happening, join (<https://discord.gg/Wejhbd4>) and tell support it is error \`bug1\`.`,

  "504 Gateway Timeout": `Look like the service we use for this command is giving us problems :(\n\nAll we can currently do is wait, sadly\nIf it is still happening after a few hours, join (<https://discord.gg/Wejhbd4>) and tell support it is error \`bug2\`.`,

  // Bug Hunting errors
  "DiscordRESTError [10003]: Unknown Channel": `Something broke!\n\nI am currently not sure why this bug is happening, but if you report this bug in the support server, you will get paid for it in meme coins.\nJoin (<https://discord.gg/Wejhbd4>) and tell support it is error \`hunt1\`.`
};

module.exports = Bobb => ({
  errorMessages: async function errorMessages(e) {
    return (
      errors[Object.keys(errors).find(error => e.message.includes(error))] ||
      false
    );
  },

  parseTime: function parseTime(time) {
    const methods = [
      { name: "d", count: 86400 },
      { name: "h", count: 3600 },
      { name: "m", count: 60 },
      { name: "s", count: 1 }
    ];

    const timeStr = [
      Math.floor(time / methods[0].count).toString() + methods[0].name
    ];
    for (let i = 0; i < 3; i++) {
      timeStr.push(
        Math.floor(
          (time % methods[i].count) / methods[i + 1].count
        ).toString() + methods[i + 1].name
      );
    }

    return timeStr.filter(g => !g.startsWith("0")).join(", ");
  },
  unembedify(embed) {
    const em = embed.embed;
    let embedString = "";
    if (em.author) embedString += `**${em.author.name}**\n`;
    if (em.title) embedString += `**${em.title}**\n`;
    if (em.description) embedString += `${em.description}\n`;
    for (const field of em.fields || []) {
      embedString += `\n**${field.name}**\n${field.value}\n`;
    }
    if (em.footer) embedString += `\n${em.footer.text}`;
    return `${embed.content || ""}\n${embedString || "Empty embed"}`; // Returns a string
  },

  randomNumber(min, max) {
    if (!min || !max) {
      // Default 0-100 if no args passed
      min = 0;
      max = 100;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  randomColor() {
    return Math.floor(Math.random() * 0xffffff);
  },
  async parseUser(message, person) {
    await message.guild.members.fetch({ cache: true });
    const idMatcher = /^([0-9]{15,21})$/;
    const userMentionMatcher = /<@!?([0-9]{15,21})>/;
    let posibID = idMatcher.exec(person) || userMentionMatcher.exec(person);
    let toRet;
    if (posibID) {
      toRet = await message.guild.members.fetch(posibID[1]);
    } else {
      if (person.slice(-5, -4) === "#") {
        // we have a discrim
        toRet = await message.guild.members.cache.find(
          member =>
            `${member.user.username}#${member.user.discriminator}` === person ||
            `${member.nickname}#${member.user.discriminator}` === person
        );
      } else {
        toRet = await message.guild.members.cache.find(
          member =>
            member.user.username === person || member.nickname === person
        );
      }
    }
    return toRet ? toRet : null;
  },

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  },
  parseNum(thing) {
    if (!parseInt(thing)) return null;
    let ret;
    if((thing.includes("k") && thing.includes("e")) ||(thing.includes('k') && thing.includes(',')) || (thing.includes('e') && thing.includes(',')) ) return null;
    if (thing.includes("k")) {
      let ind = thing.indexOf("e");   
      ret = `${thing.slice(0, ind)}000`;
    } else if (thing.includes("e")) {
      let ind = thing.indexOf("e")
      let numAfterZero = thing.slice(ind + 1)
      let amtOfZeros = "0".repeat(parseInt(numAfterZero));
      ret = `${thing.slice(0, ind)}${amtOfZeros}`
    } else if(thing.includes(',')){
      ret = thing.replace(/,/g, '');
  }else {
      return null;
    };
    
    return parseInt(ret);
  },
  
  moveImg(img, file) {
    var data = img.replace(/^data:image\/\w+;base64,/, "");var buf = Buffer.from(data, 'base64');fs.writeFileSync('./img/ss.png', buf);
    
},
 capitalize (s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
});