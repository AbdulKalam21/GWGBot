import { ICommand } from "wokcommands";

export default{
category:'Fun',
description:'Returns Yes or No to a question',
slash:true,
testOnly:true,
name:'8ball',

callback:({interaction,text})=>{

    var items = ["Yes","No"]
            var item = items[Math.floor(Math.random()*items.length)]
            return item

}


} as ICommand