 
const Discord = require('discord.js');
const Manager = new Discord.ShardingManager("./index.js");//('./YOUR_BOT_FILE_NAME.js');
Manager.spawn(2); // This example will spawn 2 shards (5,000 guilds);
/**/
console.log(Manager);