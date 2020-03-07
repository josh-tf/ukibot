const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

// for bot secret
require("dotenv").config();

// listen for each event
fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});

client.login(process.env.BOT_TOKEN);
