exports.handle = async function (guild) {
  await this.db.deleteGuild(guild);
}