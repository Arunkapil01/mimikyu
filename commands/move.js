const moves = require("../data/moves.js").BattleMovedex;

exports.run = (client, message, args) => {
    let moveName = message.content.split(" ").slice(1).join(" ");
    let move = moves[moveName.toString()];
    if (!move) {
        for (var i = 0; i < Object.keys(moves).length; i++) {
            if (moves[Object.keys(moves)[i]].num == moveName) {
                move = moves[Object.keys(moves)[i]];
                break;
            }
        }
    }
    if (!move) {
        for (var i = 0; i < Object.keys(moves).length; i++) {
            if (moves[Object.keys(moves)[i]].name.toLowerCase() == moveName) {
                move = moves[Object.keys(moves)[i]];
                break;
            }
        }
    }
    if (move) {
        moveName = move.name;
        var descString;
        if (move.desc) {
            descString = move.desc;
        } else {
            descString = move.shortDesc;
        }
        var accuracyString;
        if (move.accuracy == true) {
            accuracyString = "Certain Success";
        } else {
            accuracyString = move.accuracy;
        }
        var viableString;
        if (move.isViable) {
            viableString = "Yes";
        } else {
            viableString = "No";
        }
      var gmax;
      if(move.gmaxPower){
        gmax = move.gmaxPower;
      }
      else gmax = "none";
      var Zmove;
      if(move.zMovePower){
        Zmove = move.zMovePower;
      }
      else Zmove = "none";
        var targetString;
        if (move.target == "normal") {
            targetString = "One Enemy";
        } else {
            targetString = capitalizeFirstLetter(move.target.replace(/([A-Z])/g, ' $1'));
        }
        var crystalString;
        if (move.isZ) {
            crystalString = capitalizeFirstLetter(move.isZ.substring(0, move.isZ.length - 1)) + " Z";
        } else {
            crystalString = "None";
        }
        var embedObject = {
            title: capitalizeFirstLetter(move.name),
            color: 35071,
            fields: [{
                    name: "Description",
                    value: descString
                },
                {
                    name: "Type",
                    value: move.type,
                    inline: true
                },
                {
                    name: "Base Power",
                    value: move.basePower,
                    inline: true
                },
                      {
                    name: "Z move Power",
                    value: Zmove,
                    inline: true
                }, 
                     {
                    name: "Gmax Power",
                    value: gmax,
                    inline: true
                },
                {
                    name: "PP",
                    value: move.pp,
                    inline: true
                },
                {
                    name: "Category",
                    value: move.category,
                    inline: true
                },
                {
                    name: "Accuracy",
                    value: accuracyString,
                    inline: true
                },
                {
                    name: "Priority",
                    value: move.priority,
                    inline: true
                },
                {
                    name: "Target",
                    value: targetString,
                    inline: true
                },
                {
                    name: "Z-Crystal",
                    value: crystalString,
                    inline: true
                }
            ],
            footer: {
                text: "#" + move.num
            }
        };
        message.channel.send({embed: embedObject});
        console.log(embedObject);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'move',
  description: 'Shows info on a move.',
  usage: 'move [move name]',
  module: 'Pokedex',
  permit: ' ',
  alias: ' '
}; 

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
