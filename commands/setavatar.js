exports.run = (client, message, args) => {
const config = require('../config.json');
let newavatartime = message.content.split(" ").slice(1);
let blasty = newavatartime.join(" ");
if(message.author.id !== config.botOwner) return message.reply('you are not my owner!!!');
if (!blasty) return;
if(!blasty.startsWith('http')){
message.reply(`New Avatar Set : ./images/avatar/${blasty}.png`);
client.user.setAvatar(`./images/${blasty}.png`);
}else {
message.reply(`New Avatar Set : ${blasty}`);
client.user.setAvatar(blasty);
}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setav'],
  permLevel: 4
};

exports.help = {
  name: 'setavatar',
  description: 'Sets the bot avatar by filename or url.',
  usage: 'setavatar [url or filename]',
  module: 'BOTAdmin',
  permit: 'Bot Owner Only',
  alias: '/ setav'
};
