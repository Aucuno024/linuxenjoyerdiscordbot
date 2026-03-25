module.exports.enabled = true

module.exports.accept = (message, msg) => {
    let msgReplaced = msg.replaceAll("Microsoft", "Microslop")
    msgReplaced = msgReplaced.replaceAll("microsoft", "microslop")
    msgReplaced= msgReplaced.replaceAll("MICROSOFT", "Microslop")
    return [message, msgReplaced]
}
