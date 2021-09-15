import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default{
category:'testing',
description:'Returns the names of the people who worked on this bot',
slash:true,
testOnly:true,
callback:({interaction})=>{
    const embed=new MessageEmbed()
            .setTitle("Hello I am GwG bot")
            .addField("About Me","I am a general purpose bot written for\n Games With Gabe's official discord server",false)
            .addField("Repository Maintainer:","AKDev#4593")
            .addField("Bot Developer:","Kittycat#5642 -> https://ko-fi.com/lioncatdevstudio")
            .addField("Want your own bot?","email: eatitall2002@gmail.com to get a quote")
            .setColor('#22577A')
            return embed
}


} as ICommand