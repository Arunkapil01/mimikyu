const pokemonList = require("../data/pokemonList.json");
const { MessageEmbed } = require("discord.js");

const getUrl = (n1, n2) => `http://images.alexonsager.net/pokemon/fused/${n1}/${n1}.${n2}.png`;
const getRandom = (i) => Math.floor(Math.random() * i);
const getMonName = (id) => pokemonList[id - 1].Name;
const capFL = (string) => string.charAt(0).toUpperCase() + string.slice(1);
//console.log(getUrl(r1),(n2))


exports.run = (client, message, args, randomColor) => {

  var r1 = getRandom(151);
  var r2 = getRandom(151);
  //console.log(getUrl(r1,r2));
  const embed = new client.embed .MessageEmbed()
    
    .setDescription("You got a fusion of **" + capFL(getMonName(r1)) + "** and **" + capFL(getMonName(r2)) + "**." + client.danceEmote)
    .setColor(randomColor)
    .setImage(getUrl(r1, r2))
    //.setTimestamp()
 return  message.channel.send({embed});
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'randomfusion',
  description: 'Get a random Pokémon fusion.',
  usage: 'randomfusion',
  module: 'Pokemon',
  permit: ' '
}