'use strict';

exports.BattleSets = (client, pokemon, gen, callback) => {
  if (!pokemon || !gen) return;
  var options = {
    gen: gen,
    alias: pokemon
  }
  client.request.post('http://www.smogon.com/dex/_rpc/dump-Pokemon', {body:options, json:true}, (error, response, body) => {
    console.log(!error && response.statusCode == 200 && body != null);
    if (!error && response.statusCode == 200 && body != null){
      var sets = [];
      if (body.strategies.length > 0) {
        for(var i = 0; i < body.strategies.length; i++ ){
       if(body.strategies[i].movesets.length > 0){
            for (var o = 0; o < body.strategies[i].movesets.length; o++){
              sets.push(body.strategies[i].movesets[o])
            }
          } 
    
        }
        callback(sets)
      } 
      else {
        callback({error: 'No builds found.'})
      }

    } else {
      callback({error: 'Pokemon not found.'})
    }
  })
  
}