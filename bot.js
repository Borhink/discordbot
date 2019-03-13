const Discord = require("discord.js");
const config = require('./private/config/config.json');
const channels = require('./private/config/channels.json');
const roles = require('./private/config/roles.json');
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
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **Bienvenue** chez ' + member.guild + ", " + member.user + ' ! :smile:')
        .setFooter('Nous sommes maintenant ' + member.guild.memberCount);

    member.guild.channels.get(channel.general.id)
        .send(embed);
    member.addRole(roles.jeunot);
});

//On member leave
bot.on('guildMemberRemove', member => {
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: ' + member.user + ' a quitté ' + member.guild + ' ! :smile:')
        .setFooter('Nous ne sommes plus que ' + member.guild.memberCount);

    member.guild.channels.get(channel.general.id)
        .send(embed);
});

//Login in
bot.login(config.token);