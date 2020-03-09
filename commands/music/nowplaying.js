const { Command } = require("discord.js-commando");

module.exports = class NowPlayingCommand extends Command {
  constructor(client) {
    super(client, {
      name: "nowplaying",
      group: "music",
      memberName: "nowplaying",
      description: "List the name of the current playing song",
      guildOnly: true
    });
  }

  run(message) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("There is nothing playing.");
    return message.channel.send(`Now playing: ${serverQueue.songs[0].title}`);
  }
};
