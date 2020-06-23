

const reqEvent = (event) => require(`../events/${event}`);
const msgEvent = (event) => require(`../bot.js`)
module.exports = client => {
  
  
   
  client.on('reconnecting', () => reqEvent('reconnecting')(client));
  client.on('disconnect', () => reqEvent('disconnect')(client));
 /*
  client.on('roleDelete', reqEvent('roleDelete'));
  client.on('roleCreate', reqEvent('roleCreate'));*/
  client.on('guildCreate', reqEvent('guildCreate'));
  client.on('guildDelete', reqEvent('guildDelete'));
  //client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
  
 /* client.on('guildBanAdd', reqEvent('guildBanAdd'));
  client.on('guildBanRemove', reqEvent('guildBanRemove'));
  client.on('channelDelete', reqEvent('channelDelete'));
  client.on('channelCreate', reqEvent('channelCreate'));
  client.on('channelUpdate', reqEvent('channelUpdate'));*/
  //
  client.on('message', msgEvent('message'));
};
