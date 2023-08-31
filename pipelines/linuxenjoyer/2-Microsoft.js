module.exports.enabled = true

module.exports.accept = (message, msg) => {
    if(message.content.toLowerCase().includes("microsoft")){
        let msg = message.content.replaceAll("Microsoft", "Meincrosauft")
        msg = msg.replaceAll("microsoft", "meincrosauft")
        return [message, msg]
    }else{
        return [message, msg]
    }
}
