const commando = require('discord.js-commando');            //Imports the commando frame work because that's how real devs work also makes the bot scalable :P
const path = require('path');                               //path library need for imprting custom commands
const config = require('./config.json');                    //always define secrets in config.json

const client = new commando.CommandoClient({
    owner: config.botOwner,
    commandPrefix:'.',
});

client.on('ready',async ()=>{
    console.log("Bot online")
    client.registry
    .registerGroups([
        ['fun','Contains general commands'],                //register groups has an array which contains another array for command grouping as ['command-name','command-description'] 
    

    ])
    .registerDefaults()                                     //initializing default commands
    .registerCommandsIn(path.join(__dirname,'botCommands')) //initializing custom commands
})

client.login(config.token);