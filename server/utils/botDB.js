module.exports = Bobb => ({
  fetchMemberInfo: async function fetchMemberInfo(search) {
    return await Bobb.mongo.Person.findOne(search, async (err, res) => {
      if (err) throw err;
        return res;
    }).catch(e => console.log(e));
  },

  updateMember: async function updateMember(search, update) {
   return Bobb.mongo.Person.findOneAndUpdate(search, update, {new: true});
  },
  updateBal: async function updateBal(memberID, amt) {
   return await this.updateMember({discID: memberID}, {$inc: {balance: amt}})
  },
  createGuild: async function createGuild(guild) {
    await Bobb.mongo.Guild.create({
      guild: guild.name,
      guildID: guild.id
    });
    return Bobb.botStats.findOneAndUpdate({_id: "60070be0f12d9e041931de68"}, {$inc: {guildsJoined: 1}}, {new: true}); 

  },
  deleteGuild: async function deleteGuild(guild) {
    await Bobb.mongo.Guild.findOneAndDelete(
      { guildID: guild.id },
      (err, res) => {
        if (err) throw err;
      }
    );
     return Bobb.botStats.findOneAndUpdate({_id: "60070be0f12d9e041931de68"}, {$inc: {guildsLeft: 1}}, {new: true});

  },
  getGuild: async function getGuild(id, update) {
    let gui;
    if (id) {
      gui = await Bobb.mongo.Guild.findOne(
        { guildID: id },
        async (err, res) => {
          if (err) throw err;
          return res;
        }
      );
      if (!update) return gui;
    }

    if (update) {
      return Bobb.mongo.Guild.updateOne({ guildID: id }, update, err => {
        if (err) throw err;
      });
    }
  },
  addSpam: async function addSpam(userID) {
    return Bobb.cmds.findOneAndUpdate({discID: userID}, {$inc: {spam: 1}}, {new: true});
  },
  updateCooldowns: async function createCooldown(command, userID) {
    const pCommand = Bobb.cmds.find(c =>
      c.props.triggers.includes(command.toLowerCase())
    );
    if (!pCommand) {
      return;
    }
    let cooldown = pCommand.props.cooldown;

    const profile = await this.getCooldowns(userID, false);
    if (!profile) {
      return this.createCooldowns(command, userID);
    }
    if (profile.cooldowns.some(cmd => cmd[command])) {
      profile.cooldowns.forEach(cmd => {
        if (cmd[command]) {
          cmd[command] = Date.now() + cooldown;
        }
      });
    } else {
      profile.cooldowns.push({ [command]: Date.now() + cooldown });
    }
    if (cooldown) {
      return Bobb.cooldowns.set(userID, {
        id: userID,
        cooldowns: profile.cooldowns
      });
    }
  },

  createCooldowns: async function createCooldowns(command, userID) {
    const pCommand = Bobb.cmds.find(c =>
      c.props.triggers.includes(command.toLowerCase())
    );
    if (!pCommand) {
      return;
    }
    const cooldown = pCommand.props.cooldown;
    if (cooldown) {
      return Bobb.cooldowns.set(userID, {
        id: userID,
        cooldowns: [{ [command]: Date.now() + cooldown }]
      });
    } else {
      return console.error(`No cooldown for following command: ${pCommand}`);
    }
  },

  getCooldowns: function getCooldowns(userID, type) {
    let all = type === "all";
    if (all || type !== "db") {
      const cooldown = Bobb.cooldowns.get(userID) || {
        cooldowns: [],
        id: userID
      };
      if (!all) {
        return cooldown;
      } else {
        all = cooldown;
      }
    }
    return all;
  },

  deleteCooldowns: function deleteCooldowns(userID) {
    Bobb.cooldowns.delete(userID);
  },

  getSpecificCooldown: async function getSpecificCooldown(command, userID) {
    const cooldown = command.cooldown;
    const profile = Bobb.cooldowns.get(userID);
    if (!profile) {
      return 1;
    }
    const cooldowns = profile.cooldowns.find(item => item[command.triggers[0]]);
    if (!cooldowns) {
      return 1;
    }
    return profile.cooldowns.find(item => item[command.triggers[0]])[
      command.triggers[0]
    ];
  },
  addSpam: async function addSpam(id) {
    await this.updateMember(id, { $inc: { cmdSpam: 1 } });
  },

});