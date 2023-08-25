module.exports.enabled = true

module.exports.accept = (next, message, msg) => {
    if(message.content.toLowerCase().includes("microsoft")){
        let msg = message.content.replaceAll("Microsoft", "Meincrosauft")
        msg = msg.replaceAll("microsoft", "meincrosauft")
        next(message, msg)
    }else{
        next(message, msg)
    }
}
