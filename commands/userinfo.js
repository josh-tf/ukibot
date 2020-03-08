const Discord = require("discord.js");

function formatDate(date) {
  var d = new Date(date), month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(), year = d.getFullYear();

  if (month.length < 2)
    month = "0" + month;
  if (day.length < 2)
    day = "0" + day;

  return [ day, month, year ].join("/");
}

module.exports = {
  name : "userinfo",
  admin : false,
  description : "Get information about a user.",
  execute(message) {
    const member = message.mentions.members.first();
    const user = member.user;

    const joinedAt = formatDate(member.joinedAt);
    const createdAt = formatDate(user.createdAt);

    const embed = {
      title : `${user.username}`,
      color : 15072487,
      timestamp : "2020-03-07T23:38:01.994Z",
      footer : {
        icon_url :
            "https://cdn.discordapp.com/avatars/617520090535165952/fc142a26ffbe22234d41df600553329b.png",
        text : "ukibot.js lookup"
      },
      thumbnail : {url : `${user.avatarURL}`},
      author : {
        name : "ukibot v1.0.0",
        icon_url :
            "https://cdn.discordapp.com/avatars/617520090535165952/fc142a26ffbe22234d41df600553329b.png"
      },
      fields : [
        {name : "User ID", value : `${user.id}`, inline : true},
        {name : "Discord ID", value : `${user.tag}`, inline : true},
        {name : "Joined Hangout", value : `${joinedAt}`, inline : true},
        {name : "Joined Discord", value : `${createdAt}`, inline : true}, {
          name : "Current Status",
          value : `${user.presence.status}`,
          inline : true
        },
        {name : "Role", value : `${member.highestRole.name}`, inline : true}
      ]
    };
    message.channel.send({embed});
  }
};
