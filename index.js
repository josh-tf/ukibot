const Discord = require("discord.js");
const client = new Discord.Client();

// for bot secret
require('dotenv').config()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.substring(0, 1) == ">") {
    var args = msg.substring(1).split(" ");
    var cmd = args[0];

    args = args.splice(1);
    switch (cmd) {
      case "owo":
        msg.reply("uwu");
        break;
    }
  }
});

client.login(process.env.BOT_TOKEN);