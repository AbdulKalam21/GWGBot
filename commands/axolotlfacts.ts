import axios from "axios";
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default{
category:'Fun',
description:'Sends a random axoltol fact',
slash:true,
testOnly:true,
callback:async ({interaction})=>{
    const url = `https://axoltlapi.herokuapp.com/`;

    let data,response;
    try{
        response = await axios.get(url);
        data = response.data;
       

    }catch(error){
            return error
    }

    const embed = new MessageEmbed()
            .setColor('#00FF00')
       
           .addField("Axolotl Fact",data.facts,false)
            .setFooter("Powered by https://github.com/AxolotlAPI",`https://avatars.githubusercontent.com/u/87194724?s=60&v=4` )
           
           return embed
   

}


} as ICommand