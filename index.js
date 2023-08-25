const Discord = require('discord.js')
const fs = require("fs")
const path = require('path')
const client = new Discord.Client({ intents: Object.keys(Discord.GatewayIntentBits), partials: [Discord.Partials.Channel] })
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

require('dotenv').config()


client.on("ready", async () => {
    console.log("connecté en tant que " + client.user.username + "#" + client.user.discriminator) //message de démarrage du bot
    client.user.setPresence({
        activities : [{name: "Kill Microsoft"}],
        status: "idle"
    });
});


/**
 * 
 * @param {fs.Dirent[]} pipelines 
 */
function initPipelines(pipelines) {
    let arrayCount = []
    for (const pipeline of pipelines) {
        console.log("Loading pipeline " + pipeline.name + "...")
        const pipelineDir = path.join("pipelines", pipeline.name)
        try {
            const pipelineConfig = JSON.parse(fs.readFileSync(path.join(pipelineDir, "pipeline.json")))
            if (!pipelineConfig.enabled) continue
            const stageNames = fs.readdirSync(pipelineDir).filter(file => file.endsWith(".js"))
            if (stageNames.length === 0) continue
            stageNames.sort((a, b) => parseInt(a.split("-")[0]) - parseInt(b.split("-")[0]))
            const stages = stageNames.map(name => require(path.resolve( process.cwd(), pipelineDir, name))).filter(stage => stage.enabled)
            let i = 0
            function next(...args) {
                const stage = stages[++i]
                if (stage != null && typeof stage.accept === "function") return stage.accept(next, ...args)
                console.log("pipeline " + pipeline.name + " reached the end !")
                i = 0
            }

            if (pipelineConfig.type === "messageCreate" && pipelineConfig.settings.channels === "all") {
                client.on("messageCreate", (message) => {
                    if(!message.author.bot){
                        stages[0].accept(next, message)
                    }
                })
            }
            console.log("Pipeline " + pipeline.name + " successfully loaded.")
        } catch (err) {
            console.error("An error occurred while loading pipeline " + pipeline.name + ": " + err.message + ". Skipping...")
            console.error(err)
        }

    }
}

fs.readdir("pipelines", {withFileTypes: true}, (err, files) => {
    if (err) {
        console.warn("No pipelines directory found, creating one and skipping pipeline loading...")
        fs.mkdirSync("pipelines")
        return
    }
    console.log("Loading pipelines from directory " + path.join(process.cwd(), "pipelines") + "...")
    initPipelines(files.filter(file => file.isDirectory()))
})


client.login(process.env.TOKEN).then(r => console.log("login"))