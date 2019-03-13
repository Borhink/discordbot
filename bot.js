const Discord = require("discord.js");
const config = require('./config.json');
const bot = new Discord.Client();

//On bot Ready
bot.on('ready', () =>  {
    console.log("Bot Started !");
});

//On "Hello" received
bot.on('message', message => {
    if (message.content.toLowerCase().includes('hello bot!')) {
        message.channel.send("Hello " + message.author);
    }
});

//On new member
bot.on('guildMemberAdd', member => {
    member.guild.channels.get('')
})

//Login in
bot.login(config.token);