const dex = require("../data/learnsets.js").BattleLearnsets;
exports.run = (client, message, args) => {
var poke;
  var move;
  if(args[0] && !args[1]){
   poke = args[0].toLowerCase();
   let output = Object.keys(dex[poke].learnset)
 
     
  message.channel.send("List of all moves "+ capitalizeFirstLetter(poke)+ " can learn ```"+ output +"```", { split:  {maxLength :2000, char: "," ,prepend: '```',
    append: '```'}});
  } else
  
   if(!args[0] || !args[1]) return message.reply("Please, include a pokemon name and a move name after that");
  else if(args[1] && args[0]){
     poke = args[0].toLowerCase();
  move = args[1].toLowerCase();
 
    if(dex[poke].learnset[move]) return message.channel.send(capitalizeFirstLetter(poke)+" is able to learn "+ capitalizeFirstLetter(move) +".")
    else return message.channel.send(capitalizeFirstLetter(poke)+" is unable to learn "+ capitalizeFirstLetter(move) +".")
  }
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'learn',
  description: 'Check if a pokemon can learn a move.',
  usage: 'learn [Pokemon name] [move name].',
  module: 'Pokedex',
  permit: ' ',
  alias: ' '
}; 

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};