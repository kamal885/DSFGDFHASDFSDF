const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : Moshaks');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'Surprise Mother Fucker :) ',
     details: `- Developer - Programmer`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `إنسآن `,
     application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
         small_text: ' Take This ! ' ,
        large_image: `377480353259978752`,
          large_text: `EGY FOREVER ♥` }

  }
    });
});


client.login(process.env.BOT_TOKEN);
