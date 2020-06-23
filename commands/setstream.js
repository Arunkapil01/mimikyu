exports.run = (client, message, args) => {
const config = require('../config.json');
let game = message.content.split(' ').slice(1)
let playing = game.join(' ')
if(message.author.id === config.botOwner){
message.reply("New Streaming Set: " + playing);
client.user.setGame(`${playing} | ${client.guilds.size} Servers`, config.streamingurl)
}else {
message.reply("I only follows my master's command.")
}
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setstream',
  description: 'Sets the streaming game of bot.',
  usage: 'setstream [game]',
  module: 'BOTAdmin',
  permit: 'Bot Owner Only',
  alias: ' '
};
