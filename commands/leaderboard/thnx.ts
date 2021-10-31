import { User } from "discord.js";
import { MembershipStates } from "discord.js/typings/enums";
import { ICommand } from "wokcommands";

export default{
category:'Fun',
description:'Thanks to a user',
//slash:true,
testOnly:true,
name:'thnx',
minArgs:1,
expectedArgs:'_user_',

callback:({message})=>{
    var mentionsarr:String[]=[]
    if(message.mentions.members && message.mentions.members.size > 0){
        const mentionedusers=JSON.parse(JSON.stringify(message.mentions.toJSON()))
        mentionedusers['users'].forEach((x: string) => {
          mentionsarr.push(`<@${x}>`)
        });
        return `hello ${mentionsarr}`
      }
      
    

}


} as ICommand