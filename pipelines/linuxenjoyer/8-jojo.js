const PermissionFlagsBits = require("discord.js");
const fs = require('fs')
module.exports.enabled = true

module.exports.accept = (message, msg) => {
    let stands = fs.readFileSync("pipelines\\linuxenjoyer\\stand.txt", "utf8")
    stands = stands.split("\n")
    for( let stand of stands){
        for(let i = 0; i < stand.length-1; i++){
            copie += stand[i]
        }
        msg = msg.replaceAll(copie, "『" + copie + "』")
    }
    return [message, msg]
}