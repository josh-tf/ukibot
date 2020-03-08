const Discord = require("discord.js");
const fs = require("fs");
const { prefix } = require("../config.json");

module.exports = {
  name: "help",
  admin: false,
  description: "List all available commands.",
  execute(message) {
    let str = "";
    const commandFiles = fs
      .readdirSync("./commands")
      .filter(file => file.endsWith(".js"));

    const embed2 = {
      title: "Ukibot v1.0.0 commands",
      description:
        "Below commands can be run by any user, the prefix is `>` and some commands require a username or arg.",
      color: 10682261,
      fields: [
        {
          name: ">help",
          value: "List all the available commands"
        },
        {
          name: "sss",
          value: "sssssss"
        }
      ],
      footer: {
        text: "🌏 Generated at xx/xx/xxxx xx:xx PM AEST",
        icon_url: ""
      },
      thumbnail: {
        url:
          "https://cdn.discordapp.com/avatars/617520090535165952/fc142a26ffbe22234d41df600553329b.png"
      }
    };

    let embed = new Discord.RichEmbed()
      .setAuthor("Ukibot v1.0.0 commands")
      .setColor("#ff4329")
      .setDescription(
        "Below commands can be run by any user, the prefix is `>` and some commands require a username or arg."
      )
      .setFooter("help.js")
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/617520090535165952/fc142a26ffbe22234d41df600553329b.png"
      )
      .setTimestamp(Date.now());
    for (const file of commandFiles) {
      const command = require(`./${file}`);
      var cmdName = `${command.name}`;
      //var cmdAdmin = `${command.admin}`;
      var cmdDesc = `${command.description}`;
      embed.addField(`${prefix}${cmdName}`, cmdDesc);
      //embed.fields[cmdName] = cmdDesc;
    }
    message.channel.send(embed);
  }
};
