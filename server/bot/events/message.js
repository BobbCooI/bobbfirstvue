const gifs = require("../../assets/permGifs.json");
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const Discord = require("discord.js");

const AUTORESPONSE_MATRIX = {
  dad: {
    regex: /^(im|i['’]m|i am)\s+(.+)/i,
    parse: match => `Hi ${match[2]}, I'm dad`
  },
  sec: {
    regex: /^(one sec$|one second|sec$)/i,
    parse: () => sleep(1000).then(() => "It's been one second")
  },
  ree: {
    regex: /^(ree)/i,
    parse: match => `R${"E".repeat(match.input.split(/ +g/)[0].length)}`
  },
  nou: {
    regex: /^(no (?=u{1,}$))/i,
    parse: () => "no u"
  }
};
const SWEARWORDS = [
  "fuck",
  "penis",
  "cunt",
  "faggot",
  "wank",
  "nigger",
  "nigga",
  "slut",
  "bastard",
  "bitch",
  "asshole",
  "dick",
  "blowjob",
  "cock",
  "pussy",
  "retard",
  "ligma",
  "sugondese",
  "sugandese",
  "fricc",
  "hecc",
  "sugma",
  "updog",
  "bofa",
  "fugma",
  "snifma",
  "bepis",
  "da wae",
  "despacito"
];
const PREMATURE_REQUIREMENTS = [
  "im",
  "i'm",
  "i am",
  "no u",
  "sec",
  "one sec",
  "ree"
].concat(SWEARWORDS);

exports.handle = async function(message) {
  let st = new Date;
  if (message.author.bot) {
    return;
  }
  /*  if (
    this.config.options.dev &&
    !this.config.options.developers.includes(message.author.id)
  ) {
    return;
  }*/

  this.botStats.findOneAndUpdate({ _id: "60070be0f12d9e041931de68" }, { $inc: { messages: 1 } });
  cacheMessage.call(this, message);
  let slicedMessage = message.content.split(/\s+/g);
  let passed;
  if (
    PREMATURE_REQUIREMENTS.find(a => message.content.toLowerCase().includes(a))
  ) {
    passed = true;
  } else if (slicedMessage.length > 1) {
    for (const possibleCommand of slicedMessage) {
      if (
        this.cmds.find(c =>
          c.props.triggers.includes(possibleCommand.toLowerCase())
        ) //||   this.tags[possibleCommand.toLowerCase()]
      ) {
        passed = true;
      }
    }
  }
  // if (!passed || await this.db.checkBlocked(msg.author.id, msg.channel.guild.id)) { return; }   BLACKLISTED?
  const guildID = message.guild ? message.guild.id : false;
  const gConfig = guildID
    ? await this.db.getGuild(guildID)
    : { prefix: "a!" }; // this method takes like 500-1000 milliseconds.
 gConfig.disabledCategories = gConfig.disabledCategories
    ? gConfig.disabledCategories
    : [];
  gConfig.enabledCommands = gConfig.enabledCommands
    ? gConfig.enabledCommands
    : [];
  gConfig.disabledCommands = gConfig.disabledCommands
    ? gConfig.disabledCommands
    : [];

  if (!gConfig.autoResponse) {
    gConfig.autoResponse = {
      dad: false,
      ree: false,
      sec: false,
      nou: false
    };
  }
  // Auto responses
  for (const autoResponse in gConfig.autoResponse) {
    if (gConfig.autoResponse[autoResponse]) {
      const entry = AUTORESPONSE_MATRIX[autoResponse];
      const match = entry.regex.exec(message.content);
      if (match) {
        const result = await entry.parse(match);
        if (result.length <= 2000) {
          message.channel.send(result);
        }
      }
    }
  }

  // Swear detection
  if (gConfig.swearFilter) {
    if (SWEARWORDS.some(word => message.content.toLowerCase().includes(word))) {
      message.channel.send(
        `No swearing in this christian server :rage:\n${await message
          .delete()
          .then(() => "")
          .catch(e => {
            return message.channel.send(
              "I couldn't remove the offending message because I don't have `Manage Messages` :("
            );
          })}`
      );
    }
  }

  const selfMember = message.guild
    ? message.guild.me
    : { nick: false, id: "800952633241501696" };
  let mention = `<@${selfMember.nick ? "!" : ""}${selfMember.id}>`;
  const wasMentioned = message.content.startsWith(mention);
  if (message.content.slice(mention.length)[0] === " ")
    mention = mention += " ";
  const triggerLength = (wasMentioned ? mention : gConfig.prefix).length;

  const cleanTriggerLength = (wasMentioned
    ? `@${selfMember.nick || selfMember.username}`
    : gConfig.prefix
  ).length;

  if (
    !message.content.toLowerCase().startsWith(gConfig.prefix) &&
    !wasMentioned
  ) {
    return;
  }

  let [command, ...args] = message.content.slice(triggerLength).split(/ +/g);
  const cleanArgs = message.cleanContent
    .slice(cleanTriggerLength)
    .split(/ +/g)
    .slice(1); // Preserving this so it doesn't break anything
  // You should use msg.args.cleanContent(consumeRest: boolean), though
  command =
    command &&
    this.cmds.find(c => c.props.triggers.includes(command.toLowerCase()));
  // let isDonor = await this.db.checkDonor(msg.author.id);
  // if (isDonor) { this.ddog.increment(`user.donor`); }
  //  const isGlobalPremiumGuild = await this.db.checkGlobalPremiumGuild(msg.channel.guild.id);

  if (
    !command &&
    message.mentions.has(this.client.user.id) &&
    message.content.toLowerCase().includes("hello")
  ) {
    return message.channel.send(
      `Hello, ${message.author.username}. My prefix is \`${gConfig.prefix}\`. Example: \`${gConfig.prefix} meme\``
    );
  } else if (
    !command ||
    (command.props.ownerOnly &&
      !this.config.options.developers.includes(message.author.id)) ||
    gConfig.disabledCommands.includes(command.props.triggers[0]) ||
    ((gConfig.disabledCategories || []).includes(
      command.category.split(" ")[1].toLowerCase()
    ) &&
      !["disable", "enable"].includes(command.props.triggers[0]) &&
      !gConfig.enabledCommands.includes(command.props.triggers[0]))
  ) {
    return;
    /* } else if (command.props.donorOnly && !isDonor && (!isGlobalPremiumGuild || command.props.triggers.includes('redeem')) && !this.config.options.developers.includes(msg.author.id)) {
    if (command.props.isNSFW) {
      return message.channel.createMessage('Oi it\'s no nut november, you can fap again next month. Only our donors (`pls donate`) can bypass no nut november rules\n<https://www.youtube.com/watch?v=LNe2ecXj95U>');
    }
    return message.channel.createMessage('This command is for donors only. You can find more information by using `pls donate` if you are interested.');
  */
  }
const bypass = command.props.bypass;
  if (command.props.dmOnly && message.channel.type !== "dm") return;

  let runner = await this.db.fetchMemberInfo({ discID: message.author.id });
  if (!runner && !bypass && message.channel.type !== "dm")
    return message.channel.send("Please verify in DMs before using commands. ");
  let cmdSpam = runner ? runner.spam : 0;
  let latestCmd = runner ? runner.latestCmd : false;

  if (cmdSpam > 10500) {
    try {
      await message.author.send(
        "You have been blacklisted from the bot for spamming over 10,000 times. Nice.\nYou can appeal at this link and we will check it within 2 weeks"
      );
    } catch (e) {
      console.log(e);
      this.client.channels.fetch("795760207761768499").then(chan => {
        chan.send(
          `User ${message.author.username}#${message.author.discriminator} (${message.author.id}) did not get the appeal DM`
        );
      });
    }
    return;
  }

 await updateStats.call(this, message, command, latestCmd);

  const isInCooldown = await checkCooldowns.call(this, message, command);
  if (isInCooldown) {
    return;
  }
  const updateCooldowns = () =>
    this.db.updateCooldowns(command.props.triggers[0], message.author.id);

  try {
    let permissions = new Map().set("SEND_MESSAGES", true);
    if (message.guild) {
      permissions = message.channel.permissionsFor(this.client.user.id);
    }
    if (command.props.perms.some(perm => !permissions.has(perm))) {
      checkPerms.call(this, command, permissions, message);
    } else if (command.props.isNSFW && !message.channel.nsfw) {
      message.channel.send({
        embed: {
          title: "NSFW not allowed here",
          description:
            "Use NSFW commands in a NSFW marked channel (look in channel settings, dummy)",
          color: this.misc.randomColor(),
          image: {
            url: gifs.nsfw
          }
        }
      });
    } else {
      message.reply = str => {
        message.channel.send(`<@${message.author.id}>, ${str}`);
      };
      await runCommand.call(
        this,
        command,
        message,
        args,
        updateCooldowns,
        permissions
      );
    }
  } catch (e) {
    reportError.call(this, e, message, command, cleanArgs);
  }
};

function cacheMessage(msg) {
  if (!msg.content) {
    // Ignore attachments without content
    return;
  }
  if(msg.channel.id == "739273462559932446") return;
  const guildID = msg.guild ? msg.guild.id : "DMs";
  this.client.channels.fetch("795429963515428870").then(chan => {
    chan.send(
      new Discord.MessageEmbed()
        .setTitle(`Message ID - ${msg.id}`)
        .setDescription(
          JSON.stringify({
            userID: msg.author.id,
            content: msg.content,
            timestamp: msg.timestamp,
            guildID: guildID,
            channelID: msg.channel.id
          })
        )
    );
  });
}

async function updateStats(message, command, lastCmd) {
  if (lastCmd && Date.now() - lastCmd < 500) {
    await this.db.addSpam(message.author.id);
  }
 await this.botStats.findOneAndUpdate(
    { _id: "60070be0f12d9e041931de68" },
    { $inc: { commands: 1 } }
  );
  await this.db.updateMember(message.author.id, {
    $inc: { cmdsRan: 1 },
    $set: { latestCmd: new Date() }
  });
}
async function checkCooldowns(message, command) {
  const cooldown = await this.db.getSpecificCooldown(
    command.props,
    message.author.id
  );
  if (cooldown > Date.now() && process.env.NODE_ENV !== "dev") {
    const waitTime = (cooldown - Date.now()) / 1000;
    let cooldownWarning =
      command.props.cooldownMessage ||
      `__Time left until you can run this command again:__ `;

    const cooldownMessage = {
      embed: {
        color: this.misc.randomColor(),
        title: "chill 😩",
        description:
          cooldownWarning +
          (waitTime > 60
            ? `**${this.misc.parseTime(waitTime)}**`
            : `**${waitTime.toFixed()} seconds**`) +
          `\n\n**Default Cooldown**: ${this.misc.parseTime(
            command.props.cooldown / 1000
          )}\n**[Donor]() Cooldown**: ${this.misc.parseTime(
            command.props.cooldown / 1000
          )}\n\nwhile you wait, go watch anime!`
      }
    };

    await this.db.addSpam(message.author.id);
    message.channel.send(cooldownMessage);
    return true;
  }
  return false;
}

function checkPerms(command, permissions, message) {
  const neededPerms = command.props.perms.filter(
    perm => !permissions.has(perm)
  );
  if (permissions.has("SEND_MESSAGES")) {
    if (permissions.has("EMBED_LINKS")) {
      message.channel.send({
        embed: {
          title: "oh no!",
          description: `You need to add **${
            neededPerms.length > 1 ? neededPerms.join(", ") : neededPerms
          }** to use this command!\nGo to **Server settings => Roles => asuna-kun** to change this!`,
          color: this.misc.randomColor(),
          image:
            neededPerms.length === 1
              ? {
                  url: gifs[neededPerms[0]]
                }
              : undefined,
          footer: {
            text: "If it still doesn't work, check channel permissions too!"
          }
        }
      });
    } else {
      message.channel.send(
        `You need to add **${neededPerms.join(
          ", "
        )}** to use this command!\n\nGo to **Server settings => Roles => Dank Memer** to change this!`
      );
    }
  }
}

async function runCommand(
  command,
  message,
  args,
  updateCooldowns,
  permissions
) {
  //  this.botStats.commands++;
  let res = await command.run({
    message,
    args,
    Bobb: this,
    addCD: updateCooldowns
  });
  if (!res) {
    return;
  }
  if (res instanceof Object) {
    if (res.reply) {
      return message.channel.send(`<@${message.author.id}>, ${res.content}`);
    }
    delete res["color"]
    res = Object.assign({ color: this.misc.randomColor() }, res);
    if (!permissions.has("EMBED_LINKS")) {
      res = this.misc.unembedify({
        content: res.content,
        file: res.file,
        embed: res
      });
    } else {
      res = {
        content: res.content,
        file: res.file,
        embed: res
      };
      if (Object.keys(res.embed).join(",") === "color,content,file") {
        delete res.embed; // plz fix later
      }
    }
  }

  await message.channel.send(res, res.file);
}

async function reportError(e, message, command) {
  let date = new Date();
  let shardID = message.guild ? message.guild.shard.id : "DM";
  let guildID = message.guild ? message.guild.id : "DM " + message.channel.id;
  await this.botStats.updateOne(
    { _id: "60070be0f12d9e041931de68" },
    { $inc: { errReported: 1 } }
  );
  let msg = await this.misc.errorMessages(e);
  let randNum = Math.floor(Math.random() * 99999);
  const channel = "795760207761768499";
  if (!msg) {
    message.channel.send(
      `Something went wrong lol\nError: \`${
        command.props.triggers[0]
      }.1.${shardID}.${date.getHours()}:${date.getMinutes()}.err${randNum}\``
    );
    await this.client.channels.fetch(channel).then(chan => {
      chan.send(
        `**Error: ${e.message}**\nCode: \`err${randNum}\`\nCommand Ran: ${
          command.props.triggers[0]
        }\nDate: ${date.toLocaleTimeString(
          "en-US"
        )}\nSupplied arguments: ${message.content.split(
          / +/g
        )}\nServer ID: ${guildID}\nCluster ${
          this.clusterID
        } | Shard ${shardID}\n\`\`\` ${e.stack} \`\`\``
      );
    });
    this.log(
      `Command error:\n\tCommand: ${
        command.props.triggers[0]
      }\n\tSupplied arguments: ${message.content.split(
        / +/g
      )}\n\tServer ID: ${guildID}\n\tError: ${e.stack}`,
      "error"
    );
  } else {
    message.channel.send(msg);
    /*  await this.client.send(
      channel,
      `**Error: ${e.message}**\nCommand Ran: ${
        command.props.triggers[0]
      }\nDate: ${date.toLocaleTimeString(
        "en-US"
      )}\nSupplied arguments: ${message.content.split(/ +/g)}\nServer ID: ${
        message.channel.guild.id
      }\nCluster ${this.clusterID} | Shard ${
        message.channel.guild.shard.id
      }\n\`\`\` ${e.stack} \`\`\``
    );*/
    this.log(
      `Command error:\n\tCommand: ${
        command.props.triggers[0]
      }\n\tSupplied arguments: ${message.content.split(
        / +/g
      )}\n\tServer ID: ${guildID}\n\tError: ${e.stack}`,
      "error"
    );
  }
}