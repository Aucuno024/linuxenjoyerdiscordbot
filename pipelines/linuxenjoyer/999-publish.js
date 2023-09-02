const fs = require("fs")

module.exports.enabled = true

module.exports.accept = async (message, testingValue) => {
    if (message.content !== testingValue) {
        let channelId = JSON.parse(fs.readFileSync("pipelines/linuxenjoyer/config.json")).settings.webhookChannel
        if (channelId !== null) {
            const chan = message.guild.channels.cache.get(channelId)
            let webhooks = await chan.fetchWebhooks();
            let webhook = webhooks.find(wh => wh.token)
            if (message.channel.id !== webhook.channel.id) {
                await webhook.edit({
                    channel: message.channel
                })
            }
            message.delete()
            await webhook.send({
                content: testingValue,
                username: message.author.username,
                avatarURL: message.author.avatarURL()
            })
            let pipeline = JSON.parse(fs.readFileSync("pipelines/linuxenjoyer/config.json"))
            pipeline.settings.webhookChannel = webhook.channel.id
            fs.writeFileSync("pipelines/linuxenjoyer/config.json", JSON.stringify(pipeline))
        }
    }
    return "end"
}