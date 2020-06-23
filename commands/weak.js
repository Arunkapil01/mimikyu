const pokemonData = require("../data/pokedex.js").BattlePokedex;
const config = require("../config.json");

exports.run = (client, message, args, randomColor) => {

  const pkmn = pokemonData[args.slice (0).join(" ").toLowerCase().replace(/ /, "")];
  if (!pkmn) return message.reply("Can't find that Pokémon!");
  
  const type1 = pkmn.types[0];
  const type2 = pkmn.types[1];
  let argss = `${type1} ${type2}`
  if (!type2) {
    argss = `${type1}`;
  }
  
  let msg = {};
  msg.content = config.prefix + "type " + argss;
  msg.channel = message.channel;
  msg.pic = "https://smogon.com/dex/media/sprites/xy/" + args.slice(0).join(" ").toLowerCase().replace(" ", "-") + ".gif";
   client.commands.get("type").run(client, msg, null, randomColor);
   
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'weak',
  description: 'Get weakness of a Pokémon.',
  usage: 'weak <pokemon>',
  module: 'Pokedex',
  permit: ' '
}