/**
 * Thank the person who helped
 */
import { ICommand } from "wokcommands";
import schema from './schema/lead-schema';
export default{
category:'Helpers',
description:'Thanks to a user',
//slash:true,
testOnly:true,
name:'thnx',
aliases:['thanks','thank','thx'],
minArgs:1,
expectedArgs:'_user_',

callback:({message})=>{
    
        if(message.author.id!=message.mentions?.members?.first()?.id){
            if(message.mentions?.members?.first()?.id!="868905648908296192"){

              setTimeout(async ()=>{
                await  schema.findOneAndUpdate({
                  _id:message.mentions?.members?.first()?.id,
                  nick:message.mentions?.members?.first()?.displayName,
                },
                {
                  _id:message.mentions?.members?.first()?.id,
                  nick:message.mentions?.members?.first()?.displayName,
                  $inc:{
                    thnx:1
                  }
                },
                {
                  upsert:true,
                  new:true
                }
                )
             },1000);//wait for 1s before writing to db
             return "Thanks for letting me know this person helped you! :)"
            }
            else{
              return "Happy to help you :)"
            }
         
        }
        else{
          return "You can't thank yourself dummy! >:C "
        }
       
      
      
    

}


} as ICommand