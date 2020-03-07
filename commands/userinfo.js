const Discord = require("discord.js");

module.exports = {
  name: "userinfo",
  description: "Get information about a user.",
  execute(message) {
    // const member = message.mentions.members.first();
    // const user = member.user;

    const embed = new Discord.RichEmbed()
      .setTitle("User Info Lookup")
      .setAuthor(
        "userinfo.js > ukiyo",
        "https://cdn.discordapp.com/avatars/617520090535165952/fc142a26ffbe22234d41df600553329b.png",
        "https://yagami.xyz"
      )
      .setColor(0x00ae86)
      .setDescription("tool by ukibot v1.0.0")
      .setFooter(
        "Footer text (max: 2048 characters)",
        "http://i.imgur.com/w1vhFSR.png"
      )
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/207101146513276928/a_f3a910e078c605fb8e55e472c69bc6c0.gif"
      )
      .setTimestamp();
    message.channel.send({ embed });

    // message.channel.send(
    //  `Name: ${user.username}, ID: ${user.id}, Nickname:
    //  ${user.lastMessage.member.nickname}, Joined at ${member.joinedAt}`
    //);
  }
};
