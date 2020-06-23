const config = require("../config.json");
const emoji = require("../util/emojis.json");
exports.run = (client, message, args) => {
  message.channel.send("pong"); /*"+client.ping)/*"then(s=>{s.edit(`:ping_pong: Ping \nLatency :blue_heart: ${s.createdTimestamp-message.createdTimestamp  }ms`)/*}/*)//;//| *//*`/"API Latency :100: ${client.ping} ms`})//);*/
    
  }

//);
//}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pong'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping Pong command.',
  usage: 'ping',
  module: 'Fun',
  permit: ' ',
  alias: '/ pong'
};
