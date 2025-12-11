const fs = require('fs')
module.exports.enabled = true

module.exports.accept = (message, msg) => {
    let stands = fs.readFileSync("pipelines\\linuxenjoyer\\stand.txt", "utf8")
    stands = stands.split("\n")
    for( let stand of stands){
        let copie = ""
        for(let i = 0; i < stand.length-1; i++){
            copie += stand[i]
        }
        if(copie) {
            msg = msg.replaceAll(copie, "『" + copie + "』")
        }
    }
    return [message, msg]
}