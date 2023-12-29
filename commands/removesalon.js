const fs = require('fs')
const PermissionFlagsBits = require("discord.js");
module.exports = {
    exec: (message, data) =>{
        if(!message.member.permissions.has(PermissionFlagsBits.GuildManager)) return message.reply("Vous n'avez pas " +
            "la permission")
        let guildChannelCache = JSON.parse(fs.readFileSync("./helloChannel.json", {encoding: "utf-8"}))
        delete guildChannelCache[message.guild.id]
        fs.writeFileSync("./helloChannel.json", JSON.stringify(guildChannelCache, null, 2), {flag: "w"})
        message.reply("Salon supprimé correctement")
    }
}