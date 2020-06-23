exports.run = (client, message, args) => {
const config = require('../config.json');
if(message.author.id === config.botOwner){
  if(args[0].toLowerCase() === "idle"){
  message.reply("New Status Set")
  client.user.setStatus("idle");
  }else
  if(args[0].toLowerCase() === "online"){
  message.reply("New Status Set")
  client.user.setStatus("online");
  }else
  if(args[0].toLowerCase() === "dnd"){
  message.reply("New Status Set")
  client.user.setStatus("dnd");
  }else
  if(args[0].toLowerCase() === "invisible"){
  message.reply("New Status Set")
  client.user.setStatus("invisible");
  }
    
}else{
  message.reply("I only follows my master's commands.");
  }
  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setstaus',
  description: 'Sets the status of bot.',
  usage: 'setstatus [status]',
  module: 'BOTAdmin',
  permit: 'Bot Owner Only',
  alias: ' '
};
