const owo = require("../commands/owo");
const oof = require("../commands/oof");
const beep = require("../commands/beep");

module.exports = (client, message) => {
  // if the message is from the bot then do nothing
  if (message.author.bot) return;

  // ignore messages without the prefix
  if (!message.content.startsWith(prefix)) return;

  //! handle our commands, need to clean this up later

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}beep`)) {
    return beep(message);
  } else if (message.content.startsWith(`${prefix}oof`)) {
    return oof(message);
  } else if (message.content.startsWith(`${prefix}owo`)) {
    return owo(message);
  } else {
    message.channel.send("You did not enter a valid command 😢");
  }
};
