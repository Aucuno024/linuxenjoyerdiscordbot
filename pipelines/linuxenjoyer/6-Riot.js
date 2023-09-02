module.exports.enabled = true

module.exports.accept = (message, msg) => {
    if(message.content.toLowerCase().includes("riot")){
        let msg = message.content.replaceAll("Riot", "Rito")
        msg = msg.replaceAll("riot", "rito")
        msg = msg.replaceAll("RIOT", "RITO")
        return [message, msg]
    }else{
        return [message, msg]
    }
}
