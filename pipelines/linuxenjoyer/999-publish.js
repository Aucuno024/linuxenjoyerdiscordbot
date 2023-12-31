const { Message } = require("discord.js")

module.exports.enabled = true

/**
 * 
 * @param {Message} message 
 * @param {*} testingValue 
 * @returns 
 */
module.exports.accept = async (message, testingValue) => {
    if (message.content !== testingValue) {
        const webhooks = await message.guild.fetchWebhooks()
        let webhook = webhooks.find(webhook => webhook.name === "LinuxEnjoyer" && webhook.token)
        if (!webhook) {
            webhook = await message.channel.createWebhook({name: "LinuxEnjoyer"})
        }
        
        if (message.channelId !== webhook.channelId) {
            await webhook.edit({
                channel: message.channel
            })
        }
        try {
            await webhook.send({
                content: testingValue,
                username: message.member.displayName ?? message.author.username,
                avatarURL: message.member.displayAvatarURL() ?? message.author.avatarURL()
            })
            await message.delete()
        } catch (error) {
            console.warn("The message is already deleted. Ignoring.")
            console.debug(error)
        }
    }
    return "end"
}