exports.run = (client, message, args) => {

let randomShuffle = Math.floor(Math.random() * 802);
 //u
  //if(randomShuffle === '1'
  if(randomShuffle < 10){message.channel.send({files: [`https://pldh.net/media/pokemon/shuffle/00${randomShuffle}.png`]});}
    else if(randomShuffle < 100){message.channel.send({files: [`https://pldh.net/media/pokemon/shuffle/0${randomShuffle}.png`]});}//);
else
message.channel.send({files: [`https://pldh.net/media/pokemon/shuffle/${randomShuffle}.png`]});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'shuffle',
  description: 'Sends a random Pokemon shuffle icon.',
  usage: 'shuffle',
  module: 'Pokemon',
  permit: ' ',
  alias: ' '
};