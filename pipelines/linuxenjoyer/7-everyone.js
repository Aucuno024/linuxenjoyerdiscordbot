const PermissionFlagsBits = require("discord.js");
module.exports.enabled = true

module.exports.accept = (message, msg) => {
    if(message.content.toLowerCase().includes("@everyone") &&
        !message.member.permissions.has(PermissionFlagsBits.MentionEveryone) && message.content !== msg){
        let msgReplaced = msg.replaceAll("everyone", "notveryone")
        return [message, msgReplaced]
    }else{
        return [message, msg]
    }
}
