module.exports.enabled = true

module.exports.accept = (next, message, testingValue) => {
    console.log("deuxième fichier de la pipeline")
    console.log("message at the end of the pipeline: " + message.content)
    console.log("Valeure de controle (juste pour verifier que l'ordre des paramètres est bon): " + testingValue)
    next()
}