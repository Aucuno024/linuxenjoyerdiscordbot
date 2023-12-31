module.exports.enabled = true

module.exports.accept = (message) => {
        let msg = message.content.replaceAll("Window", "Windaube")
        msg = msg.replaceAll("window", "windaube")
        msg = msg.replaceAll("WINDOW", "WINDAUBE")
        return [message, msg]
}