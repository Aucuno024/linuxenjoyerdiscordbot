module.exports.enabled = true

module.exports.accept = (message, msg) => {
    let msgReplaced = msg.replaceAll("Musk", "Meusp")
    msgReplaced = msgReplaced.replaceAll("musk", "meusp")
    msgReplaced = msgReplaced.replaceAll("Musk", "Meusp")
    msgReplaced = msgReplaced.replaceAll("musk", "meusp")
    msgReplaced = msgReplaced.replaceAll("MUSK", "MEUSP")
    return [message, msgReplaced]
}