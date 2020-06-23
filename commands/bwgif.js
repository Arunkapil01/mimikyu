exports.run = (client, message, args, randomColor) => {
  let sprite = message.content.toLowerCase().split(' ').slice(1).join(" ").replace(" ", "-");
  if (!sprite) return;
  let gifurl = (s1, s2) => `https://play.pokemonshowdown.com/sprites/${s1}/${s2}.gif`;
  let spr = client.capFL(sprite);
  const embed = new client.embed.MessageEmbed()
    .setImage(gifurl("bwani", sprite))
    .setTitle(spr + " BW2 Front")
    .setColor(randomColor);
  message.channel.send({embed});
  embed.setTitle(spr + " BW2 Back")
    .setImage(gifurl("bwani-back", sprite));
  setTimeout(() => {message.channel.send({embed})}, 200);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bwgif',
  description: 'Sends a Pokemon gif from BW2.',
  usage: 'bwgif <pokemon>',
  module: 'Pokemon',
  permit: ' ',
  alias: ''
};
