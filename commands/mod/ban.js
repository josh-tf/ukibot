const { Command } = require("discord.js-commando");

module.exports = class BanCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ban",
      group: "mod",
      memberName: "ban",
      description: "Ban a player from the server",
      guildOnly: true
    });
  }

  run(message) {
    const member = message.mentions.members.first();

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("You need to be an admin to run this command");
    }

    if (!member) {
      return message.reply(
        "You need to mention the member you want to ban him"
      );
    }

    if (!message.member.hasPermission("MANAGE_MEMBERS")) {
      return message.reply("I can't ban this user.");
    }

    return member
      .ban()
      .then(() => message.reply(`${member.user.tag} was banned.`))
      .catch(error => message.reply("Sorry, an error occurred."));
  }
};
