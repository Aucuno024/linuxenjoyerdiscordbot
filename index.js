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

try {
    console.log(fs.readFileSync("webhook.txt", "utf-8").replace(" ", ""))
} catch {
    readline.question('Quel est l\'id du salon ? >>>', id => {
        console.log(`${id}`);
        fs.writeFileSync("webhook.txt", id, "utf-8")
    readline.close();
});
}

client.on("messageCreate",  async message => {
    if(message.content.toLowerCase().includes("window") || message.content.toLowerCase().includes("microsoft")) {
        const chan =  message.guild.channels.cache.get(fs.readFileSync("webhook.txt", "utf-8").replace(" ", ""));
        let webhooks = await chan.fetchWebhooks();
        let webhook = webhooks.find(wh => wh.token)
        let msg = message.content
        console.log("Etape 1")
        if(message.channel.id !== webhook.channel.id) {
            await webhook.edit({
                channel: message.channel
            })
        }
        console.log("Etape 2")
        msg = msg.replaceAll("Microsoft", "Meinkrosauft")
        msg = msg.replaceAll("microsoft", "meinkrosauft")
        msg = msg.replaceAll("window", "windaube")
        msg = msg.replaceAll("Window", "Windaube")
        console.log("Etape 3")
        message.delete()
        webhook.send({content: msg, username: message.author.username, avatarURL: message.author.avatarURL()})
        fs.writeFileSync("webhook.txt", `${message.channel.id}`,"utf-8")
        return console.log("done")
    }
})

/**
 * 
 * @param {fs.Dirent[]} pipelines 
 */
function initPipelines(pipelines) {
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
            let i = 0;

            function next(...args) {
                const stage = stages[++i]
                if (stage != null && typeof stage.accept === "function") return stage.accept(next, ...args)
                console.log("pipeline " + pipeline.name + " reached the end !")
            }

            if (pipelineConfig.type === "messageCreate" && pipelineConfig.settings.channels === "all") {
                client.on("messageCreate", (message) => {
                    stages[0].accept(next, message)
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


client.login(process.env.TOKEN)