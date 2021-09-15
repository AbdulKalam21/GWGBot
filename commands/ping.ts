import { ICommand } from "wokcommands";

export default{
category:'testing',
description:'Returns Pong',
slash:true,
testOnly:true,
callback:({interaction})=>{
    return 'pong'

}


} as ICommand