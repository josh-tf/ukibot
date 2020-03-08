module.exports = {
  name: "nowplaying",
  admin: false,
  description: "List the name of the current playing song",
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("There is nothing playing.");
    return message.channel.send(`Now playing: ${serverQueue.songs[0].title}`);
  }
};
