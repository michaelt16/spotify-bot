const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const Discord = require("discord.js");



const prefix = "!";

const fs = require ("fs")

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith(".js"))
for (const file of commandFiles){
    const command = require (`./commands/${file}`);
    client.commands.set(command.name, command)
}
client.on("messageCreate", message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // this slicing thing is used for if there is multiple commands like !play something. Theres space in between
    const args =  message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        client.commands.get("ping").execute (message,args)
    } else if (command == 'about'){
        client.commands.get("about").execute (message,args)
    }else if (command == 'scheduele'){
        client.commands.get("scheduele").execute(message,args)
    }else if (command == "when"){
        client.commands.get("when").execute(message,args)
    }else if (command == "owe"){
        client.commands.get("owe").execute(message,args)
    }else if (command == "pay"){
        client.commands.get("pay").execute(message,args)
    }

})


client.once('ready', ()=>{
    console.log ("Bot is Online");
})



















client.login('OTcxOTkyMzg4ODYyMTExNzk1.G3q_L4.7gfHDfR-2FgdzoakMWYhO52x7RX3kO3qWOqpek');
