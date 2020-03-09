const { Command } = require("discord.js-commando");

module.exports = class SkipCommand extends Command {
  constructor(client) {
    super(client, {
      name: "skip",
      group: "music",
      memberName: "skip",
      description: "Skip the current playing song",
      guildOnly: true
    });
  }

  run(message) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!message.member.voiceChannel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
    if (!serverQueue)
      return message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
  }
};
