/*
* En construction.
* Ceci n'est pas utile à la mise a jour actuelle cependant, il est préférable de laisser cette avancée ici.*/


/*const fs = require('fs')
const { PermissionFlagsBits } = require("discord.js");
module.exports = {
    exec: (message, data) =>{
        if(!message.member.permissions.has(PermissionFlagsBits.ManageGuild)) return message.reply("Vous n'avez pas " +
            "la permission")
        if(data.args.length < 2) return message.reply("Vous n'avez pas ajouté de noms de modules (hello/censor")
        if(data.args[1] !== "hello" && data.args[1] !== "censure") return message.reply("Nom de module invalide")
        let moduleCache = JSON.parse(fs.readFileSync("./module.json", {encoding: "utf-8"}))
        module[data.args[1]] = true
        fs.writeFileSync("./helloChannel.json", JSON.stringify(moduleCache, null, 2), {flag: "w"})
        message.reply("Salon ajouté correctement")
    }
}*/
