import axios from "axios";
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default{
category:'Fun',
description:'Sends a random Cat pic',
slash:true,
testOnly:true,
callback:async ({interaction,message})=>{
    const url = "https://api.thecatapi.com/v1/images/search";

            let data,response;
            try{
                response=await axios.get(url);
                data=response.data;
               

            }catch(error){
                    return error
            }

            const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle(`Random cat pic `)
            .setImage(data[0].url)
            .setTimestamp()

           return embed
   

}


} as ICommand