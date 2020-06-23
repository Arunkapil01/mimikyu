exports.run = (client, message, args, randomColor) => {
  const Discord = require('discord.js');
var gender = Math.floor(Math.random() * 4);
  let genderName;
  var genderCount;
  
  if (args[0] && args[0] !== "male" && args[0] !== "female" && args[0] !== "couple" || args[0] && !args[1]) {
    return message.channel.send({embed: {
      title:"Avaliable Genders",
      description:"Male - 177 Sprites\nFemale - 109 Sprites\nCouple - 18 Sprites",
      color: randomColor
    }});
  }
if (gender === 1){
genderName=`male`
genderCount=Math.floor(Math.random() * 177)
}
else if (gender === 2){
genderName=`female`
genderCount=Math.floor(Math.random() * 109)
}
else if (gender === 3){
genderName=`couple`
genderCount=Math.floor(Math.random() * 18)
}
else if (gender === 4){
genderName=`female`
genderCount=Math.floor(Math.random() * 109)
}
else {
genderName=`male`
genderCount=Math.floor(Math.random() * 177)
}
  console.log(genderName+genderCount);
  if (!args [0]) return send ();
  let temp = args[0].toLowerCase();
  let temp2 = parseInt(args[1].toLowerCase());
  if (args [0] && args[1]) {
    if (temp === "male") {
      genderName = `male`;
      genderCount = temp2;
    } else if (temp === "female") {
      genderName=`female`;
      genderCount = temp2;
    }else if (temp === "couple" || temp === "dual") {
      genderName = `couple`
      genderCount = temp2;
    }
    return send ();
}
  
  function err() {
    return message.reply("Invalid arguments specified.");
  }
  if (args[0] && !args[1]) return err();
  if (!genderName || !genderCount || genderCount > 177) return err();
  function send () {
/*message.channel.send({embed"Here's your GBA trainer sprite.", {image:*/ 
    let url = `http://www.pokestadium.com/assets/img/tools/trainercard/trainers/${genderName}/${genderCount}.png`//
 
    const embed = new Discord. MessageEmbed()
    .setImage(url)
    message. channel. send({embed});// });
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'trainer',
  description: 'Shows a random or specific trainer sprite.',
  usage: 'trainer or trainer [gender] [sprite#]',
  module: 'Pokemon',
  permit: ' ',
  alias: ' '
};