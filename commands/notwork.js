
exports.run = (client, message, args) => {
  message.channel.send({files: [`https://media.discordapp.net/attachments/370897455522512897/379668366882766850/Notwork.png`]});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'notwork',
  description: 'Notwork',
  usage: 'notwork',
  module: 'Fun',
  permit: ' ',
  alias: ''
};
