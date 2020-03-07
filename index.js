const fs = require("fs");
const Discord = require("discord.js");
const Client = require("./client/Client");
const {prefix} = require("./config.json");

// for bot secret
require("dotenv").config();

const client = new Client();
client.commands = new Discord.Collection();

const commandFiles =
    fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

console.log(client.commands);

client.once("ready",
            () => { console.log(`Ready, connected from ${client.user.tag}`); });

client.once("reconnecting",
            () => { console.log(`Reconnecting as ${client.user.tag}`); });

client.once(
    "disconnect",
    () => { console.log(`Disconnected, ${client.user.tag} is now offline`); });

client.on("message", async message => {
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);

  if (message.author.bot)
    return;
  if (!message.content.startsWith(prefix))
    return; // ignore messages from self

  try {
    command.execute(message);
  } catch (error) {
    console.error(error);
    message.reply("There was an error trying to execute that command!");
  }
});

client.login(process.env.BOT_TOKEN);
