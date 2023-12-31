module.exports.enabled = true

module.exports.accept = (message, msg) => {
    let msgReplaced = msg.replaceAll("Riot", "Rito")
    msgReplaced = msgReplaced.replaceAll("riot", "rito")
    msgReplaced = msgReplaced.replaceAll("RIOT", "RITO")
    return [message, msgReplaced]
}
