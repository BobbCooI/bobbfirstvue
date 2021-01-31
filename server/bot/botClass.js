const messageCollector = require('./handlers/messageCollector.js');
const fs = require('fs');
const path = require('path');

class Bobb {
  constructor(client) {
    this.client = client;
    this.cmds = [];
    this.http = require('../utils/http.js');
    this.mongo = {
      Person: require('../db/models/Person.js'),
      Guild: require('../db/models/Guild.js'),
    };
    this.db = require('../utils/botDB.js')(this);
    // TO DO REFRACTOR DB FUNCTIONS CODE
  this.botStats = require('../db/models/Stats.js');
    this.config = require('../config.json');
    this.log = require('../utils/logger.js').bind(this);
  //  this.helpers = require('./utils/dbFunctions.js')(this);  
    this.misc = require('../utils/botMisc.js')(this);
    this.cooldowns = new Map();    
  };
  
  async deploy() {
    this.messageCollector = new messageCollector(this.client);
     this.loadCommands();
    this.client
      .on('ready', this.ready.bind(this));
    const listeners = require(path.join(__dirname, 'events'));
    for (const listener of listeners) {
      this.client.on(listener, require(path.join(__dirname, 'events', listener)).handle.bind(this));
    }
    this.cmds.forEach(cmd => {
      console.log(cmd.category);
    })
  };
  
  
  async ready() {
    const { client } = this;
    this.log(`Ready: ${process.memoryUsage().rss / 1024 / 1024}MB`);
    
    await client.user.setActivity(`${this.client.guilds.cache.size} servers and all you qts`, {type: 'WATCHING'});
    this.mentionRX = new RegExp(`^<@!*${this.client.user.id}>`);
    this.mockIMG = await this.http.get('https://pbs.twimg.com/media/DAU-ZPHUIAATuNy.jpg').then(r => r.body);
  
  }
  loadCommands () {
    const categories = fs.readdirSync(path.join(__dirname, 'commands'));
    for (const categoryPath of categories) {
      const category = require(path.join(__dirname, 'commands', categoryPath));
      for (const command of category.commands) {
        command.category = category.name;
        command.description = category.description;
        this.cmds.push(command);
      }
    }
  }
  
  
};
module.exports = Bobb;