module.exports.enabled = true

module.exports.accept = (message) => {
    if(message.content.toLowerCase().includes("windows")){
        let msg = message.content.replaceAll("Windows", "Windaube")
        msg = msg.replaceAll("windows", "windaube")
        msg = msg.replaceAll("WINDOWS", "WINDAUBE")
        return [message, msg]
    }else{
        return [message, message.content]
    }
}