const fs = require("fs");
const {Client, Collection} = require("discord.js");
const Commando = require("discord.js-commando");

const {prefix} = require("./config.json");

// create commando client
const client = new Commando.Client({
  //! todo: switch back to class based
  commandPrefix : prefix,
  owner : "207101146513276928"
});

const path = require("path");

client.commands = new Collection();
client.queue = new Map();

client
    .registry

    // Registers your custom command groups
    .registerGroups([
      [ "fun", "Fun commands" ], [ "misc", "Misc commands" ],
      [ "music", "Music bot commands" ], [ "mod", "Moderator commands" ]
    ])

    // register defaults and all commands in folder
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, "commands"));

// for bot secret
require("dotenv").config();

client.once("ready", () => {
  console.log(`Ready, connected from ${client.user.tag}`);
  client.user.setActivity(`uwu ${prefix}help`);
});

client.once("reconnecting",
            () => { console.log(`Reconnecting as ${client.user.tag}`); });

client.once(
    "disconnect",
    () => { console.log(`Disconnected, ${client.user.tag} is now offline`); });

// to help with any debug
process.on(
    "unhandledRejection",
    error => { console.error(`Uncaught Promise Error: \n${error.stack}`); });

client.login(process.env.BOT_TOKEN);
