module.exports.enabled = true

module.exports.accept = (next, message) => {
    if(message.content.toLowerCase().includes("window")){
        let msg = message.content.replaceAll("Window", "Windaube")
        msg = msg.replaceAll("window", "windaube")
        next( message, msg)
    }else{
        next( message, message.content)
    }
}