module.exports.enabled = true

module.exports.accept = (message, msg) => {
    let msgReplaced = msg.replaceAll("Microsoft", "Meincrosauft")
    msgReplaced = msgReplaced.replaceAll("microsoft", "meincrosauft")
    msgReplaced= msgReplaced.replaceAll("MICROSOFT", "MEINCROSAUFT")
    return [message, msgReplaced]
}
