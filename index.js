onst Discord = require('discord.js')
const fs = require("fs")
const client = new Discord.Client({ intents: Object.keys(Discord.GatewayIntentBits), partials: [Discord.Partials.Channel] })
require('dotenv').config()

client.on("ready", () => {
    console.log("connecté en tant que " + client.user.username + "#" + client.user.discriminator) //message de démarrage du bot
    client.user.setPresence({
        activities : [{name: "Kill Microsoft"}],
        status: "idle"
    });
});
client.login(process.env.TOKEN).then(r => "Error")

client.on("messageCreate",  async message =>{
    if(message.content.toLowerCase().includes("window") || message.content.toLowerCase().includes("microsoft")){
        const chan =  message.guild.channels.cache.get(fs.readFileSync("webhook.txt", "utf-8"));
        let webhooks = await chan.fetchWebhooks();
        let webhook = webhooks.find(wh => wh.token)
        let msg = message.content
        console.log("Etape 1")
	if(message.channel.id !== webhook.channel.id){
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