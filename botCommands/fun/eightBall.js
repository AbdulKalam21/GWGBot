const Commando = require('discord.js-commando');                  // Importing Commando



module.exports = class eightBall extends Commando.Command{        // Extending Commando.Command class for adding our own features
    constructor(client){
            //needed
            super(client,{
                name:'8ball',                                   //name of the command
                group:'fun',
                memberName:'fun',
                description:'Answers your question in a yes or no',
                argsType:'single'                               //set to accept the string as single argument

            })
    }
    async run(message){
            var items = ["Yes","No"]
            var item = items[Math.floor(Math.random()*items.length)];
            message.reply(item)
    }
}