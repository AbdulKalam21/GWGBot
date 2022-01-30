/**
 * Sends yomama jokes
 */
import axios from "axios";
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default{
category:'Fun',
description:'yomama jokes',
slash:true,
testOnly:true,
callback:async ({interaction})=>{
    const url = "https://api.yomomma.info/";

            let data,response;
            try{
                response = await axios.get(url);
                data = response.data;
               

            }catch(error){
                   return error
            }

            const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle(`Meme`)
            .addField("Yomama",data.joke)
            .setTimestamp()
            

            

           return embed
 

}


} as ICommand