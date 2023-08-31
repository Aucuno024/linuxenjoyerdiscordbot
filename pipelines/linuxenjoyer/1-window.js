module.exports.enabled = true

module.exports.accept = (message) => {
    if(message.content.toLowerCase().includes("window")){
        let msg = message.content.replaceAll("Window", "Windaube")
        msg = msg.replaceAll("window", "windaube")
        return [message, msg]
    }else{
        return [message, message.content]
    }
}