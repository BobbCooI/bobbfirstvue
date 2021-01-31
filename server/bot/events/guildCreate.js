exports.handle = async function (guild) {
  await this.db.createGuild(guild);
}