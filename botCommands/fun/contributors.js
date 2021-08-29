
const { MessageEmbed } = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class tempLate extends Commando.Command{              //extending Commando.Command class for adding our own features
    constructor(client){
            //needed
            super(client,{
                name:'botinfo',                                 //name of the command(always lowercase!)
                group:'fun',
                memberName:'botinfo',
                description:'Lists informations about the bot',
                argsType:'single'                                       //set to accept the string as single argument
                                                                        //to see all the properties that you can add see: https://discord.js.org/#/docs/commando/master/class/Command in properties
            })
    }
    async run(message){
            //see: https://discord.js.org/#/docs/commando/master/class/Command?scrollTo=run to see all the arguments that you can pass to the function
            //always should be async
            const embed=new MessageEmbed()
            .setTitle("Hello I am GwG bot")
            .addField("About Me","I am a general purpose bot written for\n Games With Gabe's official discord server",false)
            .addField("Repository Maintainer:","AKDev#4593")
            .addField("Bot Developer:","Kittycat#2002")
            .setColor('22577A')
            message.channel.send(embed)
            
    
    }
}