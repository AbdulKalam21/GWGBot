//cat command

const Commando=require('discord.js-commando');
const axios=require('axios');//needed for making rest api requests :P
const { MessageEmbed } = require('discord.js');//message embeds


module.exports=class cat extends Commando.Command{//extending Commando.Command class for adding our own features
    constructor(client){
            //needed
            super(client,{
                name:'cat',//name of the command
                group:'fun',
                memberName:'catpics',
                description:'Sends a cat pic',
                argsType:'single'//set to accept the string as single argument
                //to see all the properties that you can add see: https://discord.js.org/#/docs/commando/master/class/Command in properties

            })
    }
    async run(message){
            //see: https://discord.js.org/#/docs/commando/master/class/Command?scrollTo=run to see all the arguments that you can pass to the function
            //always should be async
            //https://api.thecatapi.com/v1/images/search gives random cat pics
            const url="https://api.thecatapi.com/v1/images/search";

            let data,response;
            try{
                response=await axios.get(url);
                data=response.data;
               

            }catch(error){
                    message.reply("Error"+error)
            }

            const embed=new MessageEmbed()
            .setColor('#00FF00')
            .setTitle(`Random cat pic `)
            .setImage(data[0].url)

            message.channel.send(embed)
           
		   
    }
}