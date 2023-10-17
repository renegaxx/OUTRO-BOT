import { Client, IntentsBitField, Message } from "discord.js";
import * as dotenv from "dotenv"
dotenv.config()

const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', () => {
    console.log("No Ar")
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "oi") {
        message.reply("Olá, do que voce precisa? aqui estão algumas opções de como falar comigo:\nOlá bot\n")
    }
})
client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "bacana") {
        message.reply("bacana mesmo")
    }
})
client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "bacana") {
        message.reply("bacana mesmo")
    }
})
client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "bacana") {
        message.reply("bacana mesmo")
    }
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    // Verifica se a mensagem contém a palavra "feio"
    if (message.content.includes("feio")) {
        // Se a palavra "feio" estiver na mensagem, o bot responde com a frase desejada
        message.reply("desculpe se não atendi os requisitos do seu site\nExplique novamente os requisitos do seu site, e tentaremos denovo!");
    }
});
client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "Olá bot") {
        message.reply("Olá, como vão as coisas?, gostaria de alguma coisa?")
    }
})
client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    // Verifica se a mensagem contém a palavra "feio"
    if (message.content.includes("não gostei")) {
        // Se a palavra "feio" estiver na mensagem, o bot responde com a frase desejada
        message.reply("desculpe se não atendi os requisitos do seu site\nExplique novamente os requisitos do seu site, e tentaremos denovo!");
    }
});

client.login(process.env.TOKEN)




