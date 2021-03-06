const { Command } = require("discord.js-commando");

module.exports = class PurgeCommand extends Command {
  constructor(client) {
    super(client, {
      name: "purge",
      group: "mod",
      memberName: "purge",
      description: "Delete messages from the chat",
      guildOnly: true
    });
  }

  async run(message) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("You need to be an admin to run this command");
    }

    const args = message.content.split(" ");
    let deleteCount = 0;
    try {
      deleteCount = parseInt(args[1], 10);
    } catch (err) {
      return message.reply(
        "Please provide the number of messages to delete. (max 100)"
      );
    }

    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply(
        "Please provide a number between 2 and 100 for the number of messages to delete"
      );

    const fetched = await message.channel.fetchMessages({
      limit: deleteCount
    });
    message.channel
      .bulkDelete(fetched)
      .catch(error =>
        message.reply(`Couldn't delete messages because of: ${error}`)
      );
  }
};
