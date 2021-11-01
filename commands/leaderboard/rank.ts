
import { ICommand } from "wokcommands";
import schema from './schema/lead-schema';
export default{
category:'Helpers',
description:'Thanks to a user',
//slash:true,
testOnly:true,
name:'rank',
aliases:['rnk','xp'],
minArgs:1,
expectedArgs:'_user_',

callback:({message})=>{
    
        
              setTimeout(async ()=>{
                await  schema.findOne({
                    _id:message.mentions?.members?.first()?.id
                }).exec((err,res)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        message.reply(`Rank of user is ${res.thnx}`) 
                    }
                   })
             },1000);//wait for 1s before writing to db
             
            
       
       
      
      
    

}


} as ICommand