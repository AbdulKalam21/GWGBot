const Commando = require('discord.js-commando');
const axios = require('axios');                                         //needed for making rest api requests :P
const { MessageEmbed } = require('discord.js');                         //message embeds


module.exports = class yomama extends Commando.Command{              //extending Commando.Command class for adding our own features
    constructor(client){
            //needed
            super(client,{
                name:'yomama',                                            //name of the command
                group:'fun',
                memberName:'yomama',
                description:'Sends yomama jokes',
                argsType:'single'                                       //set to accept the string as single argument
                                                                        //to see all the properties that you can add see: https://discord.js.org/#/docs/commando/master/class/Command in properties
            })
    }
    async run(message){
    
        const url = "https://api.yomomma.info/";

            let data,response;
            try{
                response = await axios.get(url);
                data = response.data;
               

            }catch(error){
                    message.reply("Error"+error)
            }

            const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle(`Meme`)
            .addField("Yomama",data.joke)
            

            message.channel.send(embed)
            
    }
}