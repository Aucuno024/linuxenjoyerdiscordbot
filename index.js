const Discord = require('discord.js')
const fs = require("fs")
const {Pipeline, loadPipeline, registerPipelineType} = require('pipelinenodejs')
const path = require('path')
const client = new Discord.Client({ intents: Object.keys(Discord.GatewayIntentBits), partials: [Discord.Partials.Channel] })

require('dotenv').config()


client.on("ready", async () => {
    console.log("connecté en tant que " + client.user.username + "#" + client.user.discriminator) //message de démarrage du bot
    client.user.setPresence({
        activities : [{name: "Kill Microsoft"}],
        status: "idle"
    });
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
loadPipeline("pipelines/linuxenjoyer")




client.login(process.env.TOKEN)