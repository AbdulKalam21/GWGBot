const Commando = require('discord.js-commando');
const axios = require('axios');                                         //needed for making rest api requests :P
const { MessageEmbed } = require('discord.js');                         //message embeds


module.exports = class yomama extends Commando.Command{              //extending Commando.Command class for adding our own features
    constructor(client){
            //needed
            super(client,{
                name:'xkcd',                                            //name of the command
                group:'fun',
                memberName:'xkcd',
                description:'Random xkcd comic',
                argsType:'single'                                       //set to accept the string as single argument
                                                                        //to see all the properties that you can add see: https://discord.js.org/#/docs/commando/master/class/Command in properties
            })
    }
    async run(message){
    
        const url = `https://xkcd.com/${Math.floor(Math.random() * 2500)}/info.0.json`;

            let data,response;
            try{
                response = await axios.get(url);
                data = response.data;
               

            }catch(error){
                    message.reply("Error"+error)
            }

            const embed = new MessageEmbed()
            .setColor('64C9CF')
            .setTitle(data.safe_title)
            .setImage(data.img)

            message.channel.send(embed)
            

            
    }
}