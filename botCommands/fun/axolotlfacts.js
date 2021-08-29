const Commando = require('discord.js-commando');
const axios = require('axios');                                         //needed for making rest api requests :P
const { MessageEmbed } = require('discord.js');                         //message embeds


module.exports = class yomama extends Commando.Command{              //extending Commando.Command class for adding our own features
    constructor(client){
            //needed
            super(client,{
                name:'axofact',                                            //name of the command
                group:'fun',
                memberName:'axolotlfacts',
                description:'Sends an axolotl fact',
                argsType:'single'                                       //set to accept the string as single argument
                                                                        //to see all the properties that you can add see: https://discord.js.org/#/docs/commando/master/class/Command in properties
            })
    }
    async run(message){
    
        const url = `https://axoltlapi.herokuapp.com/`;

            let data,response;
            try{
                response = await axios.get(url);
                data = response.data;
               

            }catch(error){
                    message.reply("Error"+error)
            }

            const embed = new MessageEmbed()
            .setColor('#00FF00')
       
           .addField("Axolotl Fact",data.facts,false)
            .setFooter("Powered by https://github.com/AxolotlAPI",`https://avatars.githubusercontent.com/u/87194724?s=60&v=4` )
            message.channel.send(embed)
            

            
    }
}