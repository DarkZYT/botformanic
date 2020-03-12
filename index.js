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
        if(localchannel == null){
        var nums = ["0","1","2","3","4","5","6","7","8","9"]
        var code = "";
        code = nums[Math.floor(Math.random()*nums.length)] + nums[Math.floor(Math.random()*nums.length)] + nums[Math.floor(Math.random()*nums.length)] +nums[Math.floor(Math.random()*nums.length)];
        message.channel.send("Trade happening on code " + code + " in 10 seconds!");
        var localchannel = message.channel;
        setTimeout(function(){localchannel.send("In 5!");},5000);
        setTimeout(function(){localchannel.send("In 4!");},6000);
        setTimeout(function(){localchannel.send("In 3!");},7000);
        setTimeout(function(){localchannel.send("In 2!");},8000);
        setTimeout(function(){localchannel.send("In 1!");},9000);
        setTimeout(function(){localchannel.send("Trade has started! Good luck!"); localchannel = null;},10000);
        }
      }
});

client.login(process.env.BOT_TOKEN);
