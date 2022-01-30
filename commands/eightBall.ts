/**
 * 8 ball command
 */

import { ICommand } from "wokcommands";

export default{
category:'Fun',
description:'Returns Yes or No to a question',
slash:true,
testOnly:true,
name:'8ball',
minArgs:1,
expectedArgs:'_query_',
callback:({interaction,text})=>{

    var items = ["Yes","No"]
            var item = items[Math.floor(Math.random()*items.length)]
            return item

}


} as ICommand