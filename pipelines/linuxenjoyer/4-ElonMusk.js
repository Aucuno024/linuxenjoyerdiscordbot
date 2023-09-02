module.exports.enabled = true

module.exports.accept = (message, msg) => {
    if(message.content.toLowerCase().includes("elon musk")){
        let msg = message.content.replaceAll("Elon Musk", "Elon MessUp")
        msg = msg.replaceAll("Elon musk", "Elon messup")
        msg = msg.replaceAll("elon Musk", "elon MessUp")
        msg = msg.replaceAll("elon musk", "elon messup")
        msg = msg.replaceAll("ELON MUSK", "ELON MESSUP")
        return [message, msg]
    }else{
        return [message, msg]
    }
}