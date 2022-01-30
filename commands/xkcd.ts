/**
 * Sends xkcd comics
 */
import axios from "axios";
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default{
category:'Fun',
description:'Sends a random xkcd comic',
slash:true,
testOnly:true,
callback:async ({interaction})=>{
    const url = `https://xkcd.com/${Math.floor(Math.random() * 2500)}/info.0.json`;

    let data,response;
    try{
        response = await axios.get(url);
        data = response.data;
       

    }catch(error){
            return error
    }

    const embed = new MessageEmbed()
    .setColor('#64C9CF')
    .setTitle(data.safe_title)
    .setImage(data.img)
    .setTimestamp()

    
           return embed
   

}


} as ICommand