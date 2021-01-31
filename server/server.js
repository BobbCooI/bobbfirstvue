const express = require('express');
const app = express();
const db = require('./db/mongoose.js');
const auth = require('./api/auth.js');
const path = require('path');
const cors = require('cors');
const botClass = require('./bot/botClass.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const Asuna = new botClass(client);
(async() => {await Asuna.deploy()})();
db.connector();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', auth);

// Express port-switching logic
let port = 3000;
const listener = app.listen(port, () => {
  console.log("❇️ Express server is running on port", listener.address().port);
});
app.get('/', (req, res) => {
  res.send("Hello World!");
});

