exports.run = (client, message, args, randomColor) => {
  let sprite = message.content.toLowerCase().split(' ').slice(1).join(" ").replace(" ", "-");
  if (!sprite) message.reply("Please, supply a pokemon name");
  let gifurl = (s1, s2) => `https://play.pokemonshowdown.com/sprites/${s1}/${s2}.gif`;
  let spr = client.capFL(sprite);
  const embed = new client.embed.MessageEmbed()
    .setImage(gifurl("xyani", sprite))
    .setColor(randomColor);
  message.channel.send(spr + " Front", {embed});
  embed.setImage(gifurl("xyani-back", sprite));
  setTimeout (() => {
    message.channel.send(spr + " Back", {embed});
              }, 200);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'gif',
  description: 'Sends a Pokemon animated sprite.',
  usage: 'gif <pokemon>',
  module: 'Pokemon',
  permit: ' ',
  alias: ''
};
