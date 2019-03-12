// Token : NTU1MTYzNDE4OTc0NDg2NTYw.D2nLzQ.CApqcb6ko_yeAWaX9KAid8HL7HE
// Client ID : 555163418974486560

const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () =>  {
    console.log("Bot Started !");
});

bot.on('message', message => {
    if (message.content.toLowerCase().includes('hello bot!')) {
        message.channel.send("Hello " + message.author);
    }
});

bot.login('NTU1MTYzNDE4OTc0NDg2NTYw.D2nLzQ.CApqcb6ko_yeAWaX9KAid8HL7HE');