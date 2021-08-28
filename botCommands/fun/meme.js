const Commando = require('discord.js-commando');
const axios=require('axios');//needed for making rest api requests :P
const { MessageEmbed } = require('discord.js');//message embeds


module.exports = class tempLate extends Commando.Command{              //extending Commando.Command class for adding our own features
    constructor(client){
            //needed
            super(client,{
                name:'meme',                                 //name of the command
                group:'fun',
                memberName:'meme',
                description:'Sends a meme from reddit',
                argsType:'single'                                       //set to accept the string as single argument
                                                                        //to see all the properties that you can add see: https://discord.js.org/#/docs/commando/master/class/Command in properties
            })
    }
    async run(message){
    
        const url="https://meme-api.herokuapp.com/gimme";

            let data,response;
            try{
                response=await axios.get(url);
                data=response.data;
               while (data.nsfw) {
                response=await axios.get(url);
                data=response.data;
               }

            }catch(error){
                    message.reply("Error"+error)
            }

            const embed=new MessageEmbed()
            .setColor('#00FF00')
            .setTitle(`Meme`)
            .addField("Title",data.title)
            .setImage(data.url)

            message.channel.send(embed)
            
    }
}