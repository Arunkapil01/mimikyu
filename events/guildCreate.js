
const Discord = require("discord.js");
const config = require("../config.json")
const snekfetch = require('snekfetch')

module.exports = guild => {

  let client = guild.client;
  const bot = client.user;

  const str = `**Guild Joined**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Total Members**: ${guild.memberCount} \n**Bots**: ${guild.members.filter(m=>m.user.bot).size}\n **Guild owner** : ${guild.owner.user.tag}\n**Total Guilds count**: ${client.guilds.size}`;
  const embed2 = new Discord.MessageEmbed()
  .setAuthor(bot.username, bot.avatarURL({ format: "png", size: 1024 }))
  .setThumbnail(guild.iconURL({ format: "png", size: 1024 }))
  .setTitle("New Server Joined")
  .setColor('RANDOM')
  .setDescription(str)
  .setFooter("Guild Join")
  .setTimestamp();
  
  return client.channels.get(config.botlogchannel).send({embed: embed2});
  
   
  const botOwner = client.users.get(config.botOwner);
 
  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Hello there, I am **${bot.username}**, a Discord.js Bot made by **${botOwner.tag}**.\n\nType \`${config.prefix}h\` for a list of commands.\n\nAdditionally, I will send cool welcome and goodbye messages in a channel with some words like "welcome", "greet", "leave" etc.\nBe sure to make one if you want embedded greet-and-bye messages. \n Join my official server for more help https://discord.gg/N7n2W2k`);
 
  let ch = guild.channels.filter(c=>c.name.toLowerCase().includes("general","bot")).first();
  if (!ch) return;

  ch.send({embed});
  
  /*
  const DBL = require("dblapi.js");
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
        });
  *.*/
}