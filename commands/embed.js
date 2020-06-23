exports.run = (client, message, args) => {
const config = require('../config.json');
  const Discord = require (`discord.js`);
//if(message.author.id === config.botOwner){
  if(client.patrons.includes(message.author.id)){
    let msg = message.content.split(" ").slice(1).join(" ");
    const color = [0xF44336, 0xE91E63, 0x9C27B0, 0x673AB7, 0x3F51B5, 0x2196F3, 0x03A9F4, 0x00BCD4, 0x009688, 0x4CAF50, 0x8BC34A, 0xCDDC39, 0xFFEB3B, 0xFFC107, 0xFF9800, 0xFF5722, 0x795548, 0x9E9E9E, 0x607D8B, 0x000000, 0xFFFFFF]
    const num = Math.floor(Math.random()*color.length);
    if (!msg) return;
    const embed = new Discord.MessageEmbed()
    .setDescription(msg)
    .setColor(color[num]);
    message.delete(1);
    return message.channel.send({embed});

}else{
  message.channel.send("you're not a Patreon");
  }
  
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'embed',
  description: 'make bot embed message',
  usage: 'embed',
  module: 'BOTAdmin',
  permit: 'Bot Owner Only',
  alias: ' '
};
