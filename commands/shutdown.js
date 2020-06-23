const config = require("../config.json");

exports.run = (client, message, args) => {
  if (message.author.id !== config.botOwner) return message.reply("This command can be used by bot owner only.");
  message.channel.send("Restarting...").then(m => {
    m.edit("Restarted succesfully.").then(ms=>process.exit())
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['restart', 'reboot'],
  permLevel: 0
}

exports.help = {
  name: 'shutdown', 
  description: 'Shut downs the bot.', 
  usage: 'shutdown', 
  module: 'BOTAdmin', 
  permit: 'Bot Owner Only', 
  alias: ' '
}
