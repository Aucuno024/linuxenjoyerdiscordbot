const fs = require('fs')
const PermissionFlagsBits = require("discord.js");
module.exports = {
    exec: (message, data) =>{
        if(!message.member.permissions.has(PermissionFlagsBits.GuildManager)) return message.reply("Vous n'avez pas " +
            "la permission")
        if(data.args.length < 2) return message.reply("Vous n'avez pas ajouté d'id de salon")
        let channel = message.guild.channels.cache.get(data.args[1])
        if(!channel) return message.reply("Id de salon invalide")
        let guildChannelCache = JSON.parse(fs.readFileSync("./helloChannel.json", {encoding: "utf-8"}))
        guildChannelCache[message.guild.id] = data.args[1]
        fs.writeFileSync("./helloChannel.json", JSON.stringify(guildChannelCache, null, 2), {flag: "w"})
        message.reply("Salon ajouté correctement")
    }
}