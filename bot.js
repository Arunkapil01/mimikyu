const settings = require("./config.json");

const emoji = require("./util/emojis.json");

const { writeFile } = require("fs");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

const talkedRecently = new Discord.Collection();
const config = require("./config.json");

const client = new Discord.Client({ disableEveryone: true }); /**/
module.exports = message => {
  if (message.author.id === "373108072283111426") return;
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  let client = message.client;
  let key = message.guild.id;
  if (key === "278135637293531136") {
    client.prefix1 = "!";
  } else 
    client.prefix1 = "p-";
  
  if (message.content === "<@358785023286968323>")
    return message.reply(
      `This server prefix is ` + "```" + client.prefix1 + "```"
    );
  client.embed = Discord;

  const color = [
    0xf44336,
    0xe91e63,
    0x9c27b0,
    0x673ab7,
    0x3f51b5,
    0x2196f3,
    0x03a9f4,
    0x00bcd4,
    0x009688,
    0x4caf50,
    0x8bc34a,
    0xcddc39,
    0xffeb3b,
    0xffc107,
    0xff9800,
    0xff5722,
    0x795548,
    0x9e9e9e,
    0x607d8b,
    0x000000,
    0xffffff
  ];

  client.random = Math.floor(Math.random() * color.length);

  let randomColor = color[client.random];

  if (
    message.channel.type === "dm" &&
    settings.forwardBotDMsToOwner &&
    !message.content.startsWith.toLowerCase(client.prefix1) &&
    message.author.id !== settings.botOwner &&
    !message.author.bot
  ) {
    const embed = new MessageEmbed()
      .setAuthor(
        message.author.tag,
        message.author.avatarURL({ format: "png", size: 1024 })
      )
      .setColor(3447003)
      .setTitle("DM from " + message.author.username)
      .setDescription(message.content)
      .setThumbnail(message.author.avatarURL({ format: "png", size: 1024 }))
      .setFooter(
        message.author.id,
        client.user.avatarURL({ format: "png", size: 1024 })
      );
    client.users.get(settings.botOwner).send({ embed });
  }

  if (message.channel.type === "text") {
    if (message.channel.id === "424610309970460673")
      message.react(client.emojis.get(client.emotes.Pika_Dance));

    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith(client.prefix1)) return;
    let command = message.content
      .toLowerCase()
      .split(" ")[0]
      .slice(client.prefix1.length);
    let args = message.content.split(" ").slice(1);
    //
    let perms = client.elevation(message);
    let cmd;
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else return;

    if (cmd && message.channel.type !== "text" && cmd.conf.guildOnly)
      return message.reply(
        "This command is not avaliable in DMs. Please run this command in a server."
      );

    if (perms < cmd.conf.permLevel) return;

    if (
      talkedRecently.has(message.author.id) &&
      !client.patrons.includes(message.author.id)
    ) {
      message.delete();
      const embed = new Discord.MessageEmbed()
        .setTitle(
          "**⏲Cooldown⏲**\nPlease wait for some time before using command again."
        )
        .setDescription(
          "**Normal User Cooldown**: 30s\n **Pikacord-Patreon** Cooldown:0s\n [Click here  to support the bot!](https://donatebot.io/checkout/278135637293531136?buyer=" +
            message.author.id +
            "). Buy pikachu premium subscription now and get access to Premium Version of Pikachu bot for your server!"
        )
        .setFooter(
          "Patreon rewards will be given after you join the official Server!"
        );

      message.channel.send({ embed });
      

    
    } else
      setTimeout(
        () => {
          cmd.run(client, message, args, randomColor);
          
          console.log(command);
          talkedRecently.set(message.author.id);
          setTimeout(() => {
            talkedRecently.delete(message.author.id);
          }, 15000);
        },

        100
      );
  }
};
