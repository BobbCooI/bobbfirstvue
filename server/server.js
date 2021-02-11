const express = require('express');
const app = express();
const db = require('./db/mongoose.js');
const auth = require('./api/auth');
const visits = require('./api/webVisits');
const path = require('path');
const cors = require('cors');
const botClass = require('./bot/botClass.js');
const Discord = require('discord.js');
const client = new Discord.Client();
db.connector();
client.login(process.env.botToken);
const Asuna = new botClass(client);
(async() => {await Asuna.deploy()})();
//const whitelistIp = ["35.191.2.84", "35.191.2.91", "35.191.10.95", "35.191.8.102", "35.191.12.201", "35.191.2.84", "35.191.8.79", "130.211.1.89", "35.191.10.75", "35.191.12.197", "130.211.1.89", "130.211.0.207", "35.191.11.48", "35.191.10.81", "130.211.0.21", "35.191.3.151", "130.211.0.87", "35.191.10.235"];
var whitelist = ['https://vuehj23nso.glitch.me'];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', cors(corsOptionsDelegate))
app.use('/api/auth', auth);
app.use('/api', visits);
// Express port-switching logic
let port = 3000;
const listener = app.listen(port, () => {
  console.log("❇️ Express server is running on port", listener.address().port);
});
app.get('/', (req, res) => {
  res.send("Hello World!");
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const origin = req.header('Origin')
  console.log('ip', ip, 'ip', origin)
  
});

