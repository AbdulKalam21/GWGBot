const Commando = require('discord.js-commando');

module.exports = class tempLate extends Commando.Command{              //extending Commando.Command class for adding our own features
    constructor(client){
            //needed
            super(client,{
                name:'slap',                                 //name of the command(always lowercase!)
                group:'fun',
                memberName:'slap',
                description:'Slaps the mentioned member(only 1st one)',
                argsType:'single'                                       //set to accept the string as single argument
                                                                        //to see all the properties that you can add see: https://discord.js.org/#/docs/commando/master/class/Command in properties
            })
    }
    async run(message){
            //see: https://discord.js.org/#/docs/commando/master/class/Command?scrollTo=run to see all the arguments that you can pass to the function
            //always should be async
            if (message.mentions.members.first()==undefined) {
                message.channel.send(`Slapped ${message.author}`)
            }
            else{
                message.channel.send(`Slapped ${message.mentions.members.first()}`)
            }
            
    }
}