const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, args) => {
  const bot = client.user;
  const embed = new Discord.MessageEmbed()
    .setAuthor(bot.username, bot.avatarURL({ format: "png", size: 1024 }))
    .setThumbnail(bot.avatarURL({ format: "png", size: 1024 }))
    .setFooter(bot.username, bot.avatarURL({ format: "png", size: 1024 }))
    .setTimestamp()
    .setColor(3447003)
    .setDescription(`If you want me in your server, [click here](${config.botinvite})!\n\nIf you want to get latest updates join my [Discord Server](${config.serverinvite}).\n\nI am also on...\n[bots.discord.pw](${config.botsdiscordpwinvite})\n[discordbots.org](${config.discordbotsorginvite})\n\n[Click here](${config.githubrepo}) to see my source code.`);
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invite'],
  permLevel: 0
};

exports.help = {
  name: 'botinvite',
  description: 'Sends an invite of bot.',
  usage: 'invite',
  module: 'Other',
  permit: ' ',
  alias: ' '
};
