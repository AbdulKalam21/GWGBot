/*
Lists the top thanked users
*/
import { ICommand } from "wokcommands";
import schema from './schema/lead-schema';
import Table from 'cli-table3';
export default{
category:'Helpers',
description:'Top thanked users',
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
                message.channel.send(`\`\`\`${table.toString()}\`\`\``)
            }
           })
        },1000)
      
}


} as ICommand