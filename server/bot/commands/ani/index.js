const commands = require("fs")
  .readdirSync(__dirname)
  .filter(c => c !== "index.js")
  .map(c => require(`${__dirname}/${c}`));
module.exports = {
  commands,
  name: "👻 Anime",
  description: "Get your favorite show :)"
};