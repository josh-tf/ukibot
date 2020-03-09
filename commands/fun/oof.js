const { Command } = require("discord.js-commando");

module.exports = class OofCommand extends Command {
  constructor(client) {
    super(client, {
      name: "oof",
      group: "fun",
      memberName: "oof",
      description: "Reply with oof in all caps",
      guildOnly: false
    });
  }

  run(message) {
    const embed = {
      description:
        "▒██████╗▒   ▒██████╗▒   ███████╗\n██╔═══██╗   ██╔═══██╗   ██╔════╝\n██║▒▒▒██║   ██║▒▒▒██║   █████╗▒▒\n██║▒▒▒██║   ██║▒▒▒██║   ██╔══╝▒▒\n╚██████╔╝   ╚██████╔╝   ██║▒▒▒▒▒\n▒╚═════╝▒   ▒╚═════╝▒   ╚═╝▒▒▒▒▒   ",
      color: 16728873
    };
    message.say({ embed });
  }
};
