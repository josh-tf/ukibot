const Discord = require("discord.js");
const client = new Discord.Client();

// for bot secret
require('dotenv').config()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'owo') {
      msg.reply('uwu')
    }
  })

client.login(process.env.BOT_TOKEN);