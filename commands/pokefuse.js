const pokemonList = require("../data/pokemonList.json");
const { RichEmbed } = require("discord.js");

const getUrl = (n1, n2) => `http://images.alexonsager.net/pokemon/fused/${n1}/${n1}.${n2}.png`;
const getRandom = (i) => Math.floor(Math.random() * i);
const getMonName = (id) => pokemonList[id - 1].Name;
const capFL = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function getMonId(name) {
  var a = 0;
  for (var i = 0; i < 151; i++) {
    if (pokemonList[a].Name === name) return pokemonList[a].Id;
    a++;
  }
  
}



exports.run = (client, message, args, randomColor,Discord) => {
  if (!args[0] || !args[1]) return message.reply("You must specify two Pokémon to use this command.")
  var r1 = args[0].toLowerCase();
  var r2 = args[1].toLowerCase();
  
  if (!getMonId(r1) || !getMonId(r2)) return message.reply("Invalid Pokémon specified, only Generation 1 Pokémon (Original 151) are added yet.");
  
  const embed = new client.embed.MessageEmbed()
    .setAuthor("PokéFusion+")
    .setDescription("Here's the fusion of **" + capFL(r1) + "** and **" + capFL(r2) + "**." + client.danceEmote)
    .setColor(randomColor)
    .setImage(getUrl(getMonId(r1), getMonId(r2)))
    
    .setTimestamp();
  return message.channel.send({embed});
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pokefusion'],
  permLevel: 0
}

exports.help = {
  name: 'pokefuse',
  description: 'Get a Pokémon fusion.',
  usage: 'pokefusion <pokemon1> <pokemon2>',
  module: 'Pokemon',
  permit: ' '
}