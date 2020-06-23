const config = require("../config.json");
exports.run = (client, message, args) => { 

let sprite = message.content.toLowerCase().split(' ').slice(2);

if(args[0] === "games"){
message.channel.send('\n**home** = Pokemon home\n\n\n**ssd** = Pokemon Sword and sheild\n\n**sm** = Sun & Moon\n\n**xy** = X & Y\n**oras** = Omega Ruby & Alpha Sapphire\n**go** = Pokemon Go\n\n\n**lgo** = Pokemon lets Go\n\n**bw** = Black & White Animated\n**bw_no** = Black & White\n\n**dp** = Diamond, Pearl & Platinum\n**hg** = HeartGold\n**ss** = SoulSilver\n\n**rs** = Ruby & Saphhire\n**em** = Emerald Animated\n**frlg** = FireRed & LeafGreen\n\n**gold** = Gold\n**silver** = Silver\n**crystal** = Crystal\n\n**rb** = Red & Blue(EN) Colored\n**rb_gray** = Red & Blue(EN)\n**yellow** = Yellow Colored GBC\n**y_gb** = Yellow Colored GB\n**y_gray** = Yellow');
}else
if(args[0] === "example"){
message.channel.send("**Examples**\n`charizard` `pikachu female` `alakazam mega` `charizard-mega-x` `charizard-gigantamax` `charizard-clone`.");
}else
  if(args[0] === "home"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/home/normal/${sprite}.png`]});

   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/home/shiny/${sprite}.png`]});
              }, 250);
   
  }
    else
      if(args[0] === "ssd"){
message.channel.send({files: [`https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/${sprite}.gif`]});
  
   setTimeout (() => {
    message.channel.send({files: [`https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/${sprite}.gif`]});
              }, 200);
}else
if(args[0] === "sm"){
message.channel.send({files: [`https://play.pokemonshowdown.com/sprites/ani/${sprite}.gif`]});
  setTimeout (() => {
    message.channel.send({files: [`https://play.pokemonshowdown.com/sprites/ani-back/${sprite}.gif`]});
              }, 200);
   setTimeout (() => {
    message.channel.send({files: [`https://play.pokemonshowdown.com/sprites/ani-shiny/${sprite}.gif`]});
              }, 250);
   setTimeout (() => {
    message.channel.send({files: [`https://play.pokemonshowdown.com/sprites/ani-back-shiny/${sprite}.gif`]});
              }, 300);
}else
  if(args[0] === "lgo"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/${sprite}.png`]});
  
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/go/shiny/${sprite}.png`]});
              }, 200);
   
}
  else
if(args[0] === "go"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/go/normal/${sprite}.png`]});
  
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/go/shiny/${sprite}.png`]});
              }, 200);
   
}else
if(args[0] === "xy"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/x-y/normal/${sprite}.png`]});
 
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/x-y/shiny/${sprite}.png`]});
              }, 250);
  
}else
if(args[0] === "oras"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${sprite}.png`]});
  
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/shiny/${sprite}.png`]});
              }, 250);
   
  
}else
if(args[0] === "bw"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/black-white/anim/normal/${sprite}.gif`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/black-white/anim/back-normal/${sprite}.gif`]});
              }, 200);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/black-white/anim/shiny/${sprite}.gif`]});
              }, 250);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/black-white/anim/back-shiny/${sprite}.gif`]});
              }, 300);
}else
if(args[0] === "bw_no"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/black-white/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/black-white/back-normal/${sprite}.png`]});
              }, 200);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/black-white/shiny/${sprite}.png`]});
              }, 250);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/black-white/back-shiny/${sprite}.png`]});
              }, 300);
}else
if(args[0] === "dp"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/diamond-pearl/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/diamond-pearl/back-normal/${sprite}.png`]});
              }, 200);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/diamond-pearl/shiny/${sprite}.png`]});
              }, 250);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/diamond-pearl/back-shiny/${sprite}.png`]});
              }, 300);
}else
if(args[0] === "hg"){

  message.channel.send({files: [`https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/heartgold-soulsilver/back-normal/${sprite}.png`]});
              }, 200);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/heartgold-soulsilver/shiny/${sprite}.png`]});
              }, 250);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/heartgold-soulsilver/back-shiny/${sprite}.png`]});
              }, 300);
}else
if(args[0] === "ss"){

  message.channel.send({files: [`https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/heartgold-soulsilver/back-normal/${sprite}.png`]});
              }, 200);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/heartgold-soulsilver/shiny/${sprite}.png`]});
              }, 250);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/heartgold-soulsilver/back-shiny/${sprite}.png`]});
              }, 300);
}else
if(args[0] === "rs"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/ruby-sapphire/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/ruby-sapphire/back-normal/${sprite}.png`]});
              }, 200);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/ruby-sapphire/shiny/${sprite}.png`]});
              }, 250);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/ruby-sapphire/back-shiny/${sprite}.png`]});
              }, 300);
}else
if(args[0] === "em"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/emerald/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/emerald/back-normal/${sprite}.png`]});
              }, 200);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/emerald/shiny/${sprite}.png`]});
              }, 250);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/emerald/back-shiny/${sprite}.png`]});
              }, 300);
}else
if(args[0] === "frlg"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/firered-leafgreen/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/firered-leafgreen/back-normal/${sprite}.png`]});
              }, 200);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/firered-leafgreen/shiny/${sprite}.png`]});
              }, 250);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/firered-leafgreen/back-shiny/${sprite}.png`]});
              }, 300);
}else
if(args[0] === "gold"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/gold/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/gold/back-normal/${sprite}.png`]});
              }, 200);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/gold/shiny/${sprite}.png`]});
              }, 250);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/gold/back-shiny/${sprite}.png`]});
              }, 300);
}else
if(args[0] === "silver"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/silver/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/silver/back-normal/${sprite}.png`]});
              }, 200);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/silver/shiny/${sprite}.png`]});
              }, 250);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/silver/back-shiny/${sprite}.png`]});
              }, 300);
}else
if(args[0] === "crystal"){

  message.channel.send({files: [`https://img.pokemondb.net/sprites/crystal/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/crystal/back-normal/${sprite}.png`]});
              }, 200);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/crystal/shiny/${sprite}.png`]});
              }, 250);
   setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/crystal/back-shiny/${sprite}.png`]});
              }, 300);
  
  
  
}else

if(args[0] === "rb"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/red-blue/normal/${sprite}-color.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/red-blue/back-normal/${sprite}-color.png`]});
              }, 200);
}else
if(args[0] === "rb_gray"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/red-blue/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/red-blue/back-normal/${sprite}.png`]});
              }, 200);
}else
if(args[0] === "yellow"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/yellow/normal/${sprite}-color.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/yellow/back-normal/${sprite}-color.png`]});
              }, 200);
}else
if(args[0] === "y_gb"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/yellow/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/yellow/back-normal/${sprite}.png`]});
              }, 200);
}else
if(args[0] === "y_gray"){
message.channel.send({files: [`https://img.pokemondb.net/sprites/yellow/normal/${sprite}.png`]});
  setTimeout (() => {
    message.channel.send({files: [`https://img.pokemondb.net/sprites/yellow/back-normal/${sprite}.png`]});
              }, 200);
}else {
message.reply('Game not found, you can get a list of game codes by typing `' + config.prefix + 'sprite games`!');
}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sprite',
  description: 'Sends the Pokemon\'s sprite from specified game code.',
  usage: 'sprite [gamecode] [pokemon name]',
  module: 'Pokemon',
  permit: ' ',
  alias: ' '
};
