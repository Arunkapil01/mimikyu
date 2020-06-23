const config = require('../config.json')
const Discord = require("discord.js");
//./const client = new Discord.client ();//const config = require("../config.json")
module.exports = guild => {
  let client = guild.client;
  let bot = guild.client;
  
   
const str = `**Guild Left**: ${guild.name}\n**Guild ID**: ${guild.id}\nTotal **Members**: ${guild.memberCount} \n**Bots**: ${guild.members.filter(m=>m.user.bot).size}\n **Guild owner** : ${guild.owner.user.tag}\nTotal Guilds count: ${client.guilds.size}`;
  const embed2 = new Discord.MessageEmbed()
  //.setAuthor(bot.username, bot.avatarURL({ format: "png", size: 1024 }))
  .setTitle("Old Server Left")
  .setColor('RANDOM')
  .setDescription(str)
  .setFooter("Guild Left")
  .setTimestamp();
  
  return client.channels.get(config.botlogchannel).send({embed: embed2});
/*const DBL = require("dblapi.js");
const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1ODc4NTAyMzI4Njk2ODMyMyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTA3MDI3Njc3fQ.RqxVecke_uzCccCZfMR4ChqvkLMxMQVUcGZho2PBIpc", client);
        dbl.postStats(client.guilds.size);
      console.log("done");

   var request = require("superagent");

 var discordpwtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIyNjE3OTI5NDU0ODM1NDY2MjUiLCJyYW5kIjo0NzQsImlhdCI6MTUwNzIxMTg4M30.L_D0HfhMj5KZudzxXJ--nKJk2ffjS3UMuveKolfV_m4";



    request
        .post(`https://bots.discord.pw/api/bots/${client.user.id}/stats`)
        .send(`{ "server_count": ${client.guilds.size},
    "shards": [${client.guilds.size}],
    "shard_count": ${client.guilds.size} }`)
        .type('application/json')
        .set('Authorization', discordpwtoken)
        .set('Accept', 'application/json')
        .end(err => {
            if (err) return console.error(err);
            console.log("Posted stats to bots.discord.pw!");
        });*/
}