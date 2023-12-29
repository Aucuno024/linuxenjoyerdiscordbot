const crypto = require("crypto")
const fs = require("fs")

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
    const guildChannelCache = Object.entries(JSON.parse(fs.readFileSync("./helloChannel.json", {encoding: "utf-8"})))
    for (const tuple of guildChannelCache) {
        const gif = gifList[crypto.randomInt(gifList.length)]
        const channel = bot.channels.cache.get(tuple[1])
        if (channel) {
            channel.send(gif)
        }
    }
    setTimeout(helloTask, nextMidnight.getTime() - now.getTime())
}

module.exports = {
    launchHelloTask
}