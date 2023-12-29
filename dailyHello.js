const crypto = require("crypto")

let bot;
function launchHelloTask(client) {
    bot = client
    helloTask()
}

function helloTask() {
    const gifCache = require("./gif.json")
    const now = new Date()
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0)
    const gifList = gifCache[now.getDay()]
    const guildChannelCache = Object.entries(require("./helloChannel.json"))
    for (const tuple of guildChannelCache) {
        const gif = gifList[crypto.randomInt(gifList.length)]
        const channel = bot.channels.cache.get(tuple[1])
        if(channel){
            channel.send(gif)
        }
    }
    setTimeout(helloTask, nextMidnight.getTime() - now.getTime())
}

module.exports = {
    launchHelloTask
}