module.exports.enabled = false

module.exports.accept = (next, message, test) => {
    console.log("ceci est ignoré")
    next(message, test)
}
