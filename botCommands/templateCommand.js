/*
This is a template command 
- Make a new file by <filename>.js :P
- Paste this template code
- Modify according to your needs
- Help: https://discord.js.org/#/docs/commando/master/class/Command
*/

const Commando = require('discord.js-commando');

module.exports = class eightBall extends Commando.Command{              //extending Commando.Command class for adding our own features
    constructor(client){
            //needed
            super(client,{
                name:'templateCommand',                                 //name of the command
                group:'fun',
                memberName:'fun',
                description:'Answers your question in a yes or no',
                argsType:'single'                                       //set to accept the string as single argument
                                                                        //to see all the properties that you can add see: https://discord.js.org/#/docs/commando/master/class/Command in properties
            })
    }
    async run(message){
            //see: https://discord.js.org/#/docs/commando/master/class/Command?scrollTo=run to see all the arguments that you can pass to the function
            //always should be async
            message.reply(`Hey everyone look ${message.author.mention} used the template command!`)//won't work :P
    }
}