const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, args,randomC) => {
 
let msg = `**__Support the bot on patreon and get some patreon only , special rewards.__**\n **Patreon**: [Patreon](https://donatebot.io/checkout/278135637293531136?buyer=`+ message.author.id +`)\n **Paypal**: [Paypal](https://www.paypal.me/Arunkapil)`;//____
  message.channel.send({embed: { color: randomC, author: { name: client.user.username, icon_url: client.user.avatarURL({ format: "png", size: 1024 }) }, title: "Support the Bot on patreon",url: "https://donatebot.io/checkout/278135637293531136?buyer"+message.author.id+"", description:msg + client.danceEmote, }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['donate','paypal','PayPal','Paypal'],
  permLevel: 0
};

exports.help = {
  name: 'patreon',
  description: 'Sends an patreon of bot.',
  usage: 'patreon',
  module: 'support',
  permit: ' ',
  alias: ' '
};
