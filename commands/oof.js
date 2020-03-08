const Discord = require("discord.js");

module.exports = {
  name : "oof",
  admin : false,
  description : "Reply with oof in all caps",
  execute(message) {
    const embed = {
      description :
          "▒██████╗▒   ▒██████╗▒   ███████╗\n██╔═══██╗   ██╔═══██╗   ██╔════╝\n██║▒▒▒██║   ██║▒▒▒██║   █████╗▒▒\n██║▒▒▒██║   ██║▒▒▒██║   ██╔══╝▒▒\n╚██████╔╝   ╚██████╔╝   ██║▒▒▒▒▒\n▒╚═════╝▒   ▒╚═════╝▒   ╚═╝▒▒▒▒▒   ",
      color : 16728873
    };
    message.channel.send({embed});
  }
};
