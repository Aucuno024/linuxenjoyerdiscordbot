module.exports.enabled = true

module.exports.accept = (message, msg) => {
    if(message.content.toLowerCase().includes("bethesda") || message.content.toLowerCase().includes("betesda")){
        let msg = message.content.replaceAll("Bethesda", "Bugthesda")
        msg = msg.replaceAll("bethesda", "bugthesda")
        msg = msg.replaceAll("betesda", "bugthesda")
        msg = msg.replaceAll("Betesda", "Bugthesda")
        msg = msg.replaceAll("BETHESDA", "BUGTHESDA")
        msg = msg.replaceAll("BETESDA", "BUGTHESDA")
        return [message, msg]
    }else{
        return [message, msg]
    }
}