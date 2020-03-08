module.exports = {
  name : "kick",
  admin : true,
  description : "Kick a player",
  execute(message) {
    const member = message.mentions.members.first();

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("You need to be an admin to run this command");
    }

    if (!member) {
      return message.reply("You need to mention the member you want to kick");
    }

    if (!member.kickable) {
      return message.reply("I can't kick this user.");
    }

    return member.kick()
        .then(() => message.reply(`${member.user.tag} was kicked.`))
        .catch(error => message.reply("Sorry, an error occurred."));
  }
};
