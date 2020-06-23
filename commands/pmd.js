exports.run = (client, message, args) => {

let randomShuffle = Math.floor(Math.random() * 720);
 //u
  //if(randomShuffle === '1'
  if(randomShuffle < 10){message.channel.send({files: [`https://www.serebii.net/supermysterydungeon/pokemon/00${randomShuffle}.png?width=56&height=56`]});}
    else if(randomShuffle < 100){message.channel.send({files: [`hhttps://www.serebii.net/supermysterydungeon/pokemon/0${randomShuffle}.png?width=56&height=56`]});}//);
else
message.channel.send({files: [`https://www.serebii.net/supermysterydungeon/pokemon/${randomShuffle}.png?width=56&height=56`]});
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pmd',
  description: 'Sends the random Pokemon\'s icon from Pokemon Mystery Dungeon: DX.',
  usage: 'pmd',
  module: 'Pokemon',
  permit: ' ',
  alias: ' '
};
