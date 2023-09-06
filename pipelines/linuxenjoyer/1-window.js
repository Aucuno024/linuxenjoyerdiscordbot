module.exports.enabled = true

module.exports.accept = (message) => {
    if(message.content.toLowerCase().includes("window")){
        let msg = message.content.replaceAll("Window", "Windaube")
        msg = msg.replaceAll("window", "windaube")
        msg = msg.replaceAll("WINDOW", "WINDAUBE")
        return [message, msg]
    }else{
        return [message, message.content]
    }
}