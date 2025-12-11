const { Client, GatewayIntentBits, Partials, ActivityType } = require('discord.js')
const fs = require("fs")
const {loadPipeline, registerPipelineType } = require('pipelinenodejs')
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ], 
    partials: [Partials.Channel] 
})
const prefix = "&"
const { launchHelloTask } = require("./dailyHello");
let commands = {}

require('dotenv').config()

client.login(process.env.TOKEN).then(r => console.log("It's okay"))

client.on("ready", async () => {
    console.log("connecté en tant que " + client.user.displayName) //message de démarrage du bot
    client.user.setPresence({
        activities : [{name: "Kill Microsoft", type: ActivityType.Playing}],
        status: "idle"
    });
    launchHelloTask(client)
});
registerPipelineType("messageCreate", messagePipeline => {
    client.on("messageCreate", (message) => {
        try{
            messagePipeline.trigger(message)
        }catch (e){
            console.error(e.message)
        }


    })
})
fs.readdir("./commands", (err, files) => {
    console.log(files)
    for (const file of files.filter(f => f.endsWith(".js"))) {
        console.log("Chargement de la commande " + file)
        commands[file.split(".")[0]] = require("./commands/"+ file)
    }
});
client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    let args = message.content.split(" ")
    let cmd = args[0].slice(prefix.length).toLowerCase()
    let code = commands[cmd]
    if (code != null) {
        code.exec(message, {client: client, args: args, prefix:prefix})
    }
});

loadPipeline("pipelines/linuxenjoyer")
