
import { ICommand } from "wokcommands";
import schema from './schema/lead-schema';
import Table from 'cli-table3';
export default{
category:'Helpers',
description:'Thanks to a user',
aliases:['leaderboard'],
//slash:true,
testOnly:true,
name:'top',

callback:({message})=>{
        var msg;
        const table = new Table({
            head: ['user', 'times'],
            style: {
                head: [],
                border: [],
            },
        });
        setTimeout(async ()=>{
          schema.find().sort({ thnx: -1 }).limit(10).exec((err,res)=>{
            if(err){
                console.log(err);
            }
            else{
                msg=res
                res.forEach((x) =>{
                    
                    table.push([x.nick, x.thnx])
                } )
                message.reply(`\`\`\`${table.toString()}\`\`\``)
            }
           })
        },1000)
      
}


} as ICommand