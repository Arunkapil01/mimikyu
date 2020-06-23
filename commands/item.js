const items = require("../data/items.js").BattleItems;

const Discord = require("discord.js");

exports.run = (client, message, args, randomColor) => {
    
    let argss = message.content.split(" ").slice(1);
  let temp = argss.join(" ");
  let item = items[temp.toLowerCase().replace(/ /, "")];
  
  if (!item) {
    for (var i = 0; i < Object.keys(items).length; i++) {
        if (items[Object.keys(items)[i]].id.toLowerCase() == argss.toLowerCase().replace(" ", "").replace("'", "")) {
            item = items[Object.keys(items)[i]];
            break;
        }
    }
  }
  if (!item) return message.reply("Item not found.");
    
const embed = new Discord.MessageEmbed()
  .setAuthor(capitalizeFirstLetter(item.name), "https://raw.githubusercontent.com/110Percent/beheeyem-data/master/sprites/items/" + item.name.toLowerCase().replace(" ", "-") + ".png")
  .setThumbnail("https://raw.githubusercontent.com/110Percent/beheeyem-data/master/sprites/items/" + item.name.toLowerCase().replace(" ", "-") + ".png")
.setColor(randomColor)
  .addField("Description", item.desc)
  .addField("Generation Introduced", item.gen, true)
  .addField("Item ID", item.num, true)
  .addField("External Resources", "[Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/" + capitalizeFirstLetter(item.name.replace(" ", "_").replace("'", "")) + ") | [Smogon](http://www.smogon.com/dex/sm/items/" + item.name.toLowerCase().replace(" ", "_").replace("'", "") + ") | [PokémonDB](http://pokemondb.net/item/" + item.name.toLowerCase().replace(" ", "-").replace("'", "") + ")")
message.channel.send({embed});
        console.log("https://raw.githubusercontent.com/110Percent/beheeyem-data/master/sprites/items/" + item.name.toLowerCase().replace(" ", "-").replace("'", "") + ".png");
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'item',
  description: 'Shows info on an item.',
  usage: 'item [item name]',
  module: 'Pokedex',
  permit: ' ',
  alias: ' '
}; 

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
