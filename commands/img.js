exports.run = (client, message, args, randomColor) => {
  let sprite = message.content.toLowerCase().split(' ').slice(1).join(" ").replace(" ", "-");
  if (!sprite) message.reply("Please, supply a pokemon name");
  let gifurl = (s1, s2) => `https://play.pokemonshowdown.com/sprites/${s1}/${s2}.png`;
  let spr = client.capFL(sprite);
  const embed = new client.embed.MessageEmbed()
    .setImage(gifurl("xydex", sprite))
    .setColor(randomColor);
  message.channel.send({embed: embed.setTitle(spr)});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'img',
  description: 'Sends a Pokemon image.',
  usage: 'img <pokemon>',
  module: 'Pokemon',
  permit: ' ',
  alias: ''
};
