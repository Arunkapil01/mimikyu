exports.run = (client, message, args) => {
  const Discord =require('discord.js');
const color = [0xF44336, 0xE91E63, 0x9C27B0, 0x673AB7, 0x3F51B5, 0x2196F3, 0x03A9F4, 0x00BCD4, 0x009688, 0x4CAF50, 0x8BC34A, 0xCDDC39, 0xFFEB3B, 0xFFC107, 0xFF9800, 0xFF5722, 0x795548, 0x9E9E9E, 0x607D8B, 0x000000, 0xFFFFFF]
    const num = Math.floor(Math.random()*color.length);
    const embed = new Discord.MessageEmbed()
    //
    .setThumbnail('https://cdn.discordapp.com/icons/365158472297480203/d14b051cb831542c2add743598ffc8fa.jpg')//;
    .setColor(color[num])
      .addField("Showdown Server",'http://pokemonfunshowdown.psim.us/')
.addField("Showdown Reddit",'https://www.reddit.com/r/PokemonFunShowdown/')
.addField("Showdown Discord Server",'https://discord.gg/p6GU5At');
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'showdown',
  description: 'get all info of showdown',
  usage: 'showdown',
  module: 'Pokemon',
  permit: ' ',
  alias: ''
};
