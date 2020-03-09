const {Command} = require("discord.js-commando");

module.exports = class StopCommand extends Command {
  constructor(client) {
    super(client, {
      name : "stop",
      group : "music",
      memberName : "stop",
      description : "Stop all songs and clear the queue",
      guildOnly : true
    });
  }

  run(message) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!message.member.voiceChannel)
      return message.channel.send(
          "You have to be in a voice channel to stop the music!");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
};
