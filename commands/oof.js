const Discord = require("discord.js");

module.exports = {
  name: "oof",
  description: "Reply with oof in all caps",
  execute(message) {
    message.channel.send(`OOF !`);
  }
};