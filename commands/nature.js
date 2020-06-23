const natureData/*natures*/ = require("../data/natures.json");

exports.run = (client, message, args, randomC) => {
  
  const params = args[0].toLowerCase();
  if(!params) return message.reply("Put a nature name");
  let nature = natureData[params];
  if (!nature) return message.channel.send ("Nature not found.");
  let stat = (n) => nature[n];
  const stats = ["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"];
  const embed = new client.embed.MessageEmbed()
    .setTitle("Nature Dex")
    .setDescription("Every nature increases a stat by 10% and decreases a stat by 10%.")
    .addField("Increases", stats[stat(0)])
    .addField("Decreases", stats[stat(1)])
    
    .setTimestamp()
    .setColor(randomC);
  return message.channel.send(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['naturedex'],
  permLevel: 0
}

exports.help = {
  name: 'nature',
  description: 'Get info on a nature.',
  usage: 'nature <nature>',
  module: 'Pokedex',
  permit: ' '
}