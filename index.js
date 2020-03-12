/* eslint-disable consistent-return */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = "!";

client.on('message', message => {
      var command = message.content.replace(prefix,"").split(" ")[0];
      if (!command) return;
      var args_case = message.content.replace(prefix + command + " ","").split(" ");
      var args = message.content.toLowerCase().replace(prefix + command + " ","").split(" ");
      if(command === "trade"){
        message.channel.send("Yeehaw!"); 
      }
});

client.login(process.env.BOT_TOKEN);
