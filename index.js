const { Client, version } = require('discord.js');
const { token, serverID, roleID, interval } = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
    console.log(`[ Client ] ${bot.user.tag} Connecté zb`);

    let guild = bot.guilds.cache.get(serverID)
    if(!guild) throw `[ Error ] Problème de serverid zbi: ${serverID}`

    let role = guild.roles.cache.find(u => u.id === roleID)
    if(!role) throw `[ Error ] Role pas trouver pour ${guild.name}`
    
    if(interval < 60000) console.log(`\n[!!!] Un soucis frr..`)

    setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => console.log(`[ Error ] Jte ez.exe`));
    }, interval)

})

bot.login(token)
