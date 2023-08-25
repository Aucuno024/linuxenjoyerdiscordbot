module.exports.enabled = true

module.exports.accept = (next, message) => {
    console.log("coucou (fichier 1)")
    next(message, "essai de la valeur; si ceci s'affiche dans valeur de controle, c'est gagné!")
}