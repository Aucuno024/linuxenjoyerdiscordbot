module.exports.enabled = true

module.exports.accept = (message) => {
        let msg = message.content.replaceAll("Window", "Winslop")
        msg = msg.replaceAll("window", "winslop")
        msg = msg.replaceAll("WINDOW", "WINSLOP")
        return [message, msg]
}
