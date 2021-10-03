import DiscordJS,{ MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default{
category:'testing',
description:'Returns the names of the people who worked on this bot',
slash:true,
testOnly:true,
callback:({interaction: msgInt,channel})=>{

    const row=new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setURL("https://ko-fi.com/lioncatdevstudio")
        .setLabel("Support the Dev")
        .setStyle('LINK')
    )


    const embed=new MessageEmbed()
            .setTitle("Hello I am GwG bot")
            .addField("About Me","I am a general purpose bot written for\n Games With Gabe's official discord server",false)
            .addField("Repository Maintainer:","AKDev#4593")
            .addField("Bot Developer:","Kittycat#5642")
            .addField("Want your own bot?","email: eatitall2002@gmail.com to get a quote")
            .setColor('#22577A')
            .setTimestamp()
            msgInt.reply({embeds:[embed],components:[row]})
            
}


} as ICommand