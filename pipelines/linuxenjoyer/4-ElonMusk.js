module.exports.enabled = true

module.exports.accept = (next, message, msg) => {
    if(message.content.toLowerCase().includes("elon musk")){
        let msg = message.content.replaceAll("Elon Musk", "Elon MessUp")
        msg = msg.replaceAll("elon Musk", "Elon MessUp")
        msg = msg.replaceAll("elon musk", "Elon MessUp")
        msg = msg.replaceAll("Elon musk", "Elon MessUp")
        next( message, msg)
    }else{
        next( message, msg)
    }
}