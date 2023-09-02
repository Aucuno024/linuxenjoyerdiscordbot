module.exports.enabled = true

module.exports.accept = (message, msg) => {
        if(message.content.toLowerCase().includes("musk")){
            let msg = message.content.replaceAll("Musk", "Meusp")
            msg = msg.replaceAll("musk", "meusp")
            msg = msg.replaceAll("Musk", "Meusp")
            msg = msg.replaceAll("musk", "meusp")
            msg = msg.replaceAll("MUSK", "MEUSP")
        return [message, msg]
    }else{
        return [message, msg]
    }
}