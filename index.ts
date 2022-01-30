/*
Entry point of Bot along with Member join, member leave, delete message and edited message detection
*/

import DiscordJS, { Emoji, Intents, MessageEmbed, TextChannel } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import mongoose from 'mongoose'
var config=require('./config.json')
const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
    
  ],
})

client.on('ready', async () => {

  

  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, '/commands'),
    // Allow importing of .ts files if you are using ts-node
    typeScript: true,
    testServers:["786048655596847106","868405594187518003"],
    mongoUri:process.env.MONGODB_URI,
    dbOptions:{
      keepAlive:true
    }
  })
  
  .setDefaultPrefix("!")
  .setCategorySettings([
    {
        name: 'Helpers',
        emoji: '👷‍♀️'
    },])
  
})



client.on('guildMemberAdd',(member)=>{
  
 
  const embed=new MessageEmbed()
  .setColor('YELLOW')
  .addField("Welcome",`Everyone welcome 👋 **${member}** to ${member.guild.name}`)
  .setThumbnail(member.user.displayAvatarURL())
  .setTimestamp()
  
  member.guild.systemChannel?.send({embeds:[embed]})
 
  
  
})

client.on('guildMemberRemove',(member)=>{
  
  const embed=new MessageEmbed()
  .setColor('YELLOW')
  .addField("Oh no",` **${member}** left 😢😿`)
  .setTimestamp()
  
  member.guild.systemChannel?.send({embeds:[embed]})
})

client.on('messageDelete',(message)=>{
  if(message.author?.id===client.user?.id){
    return;
  }
  if(message.author?.bot){
    return;
  }
  const msgContent=message?.content?.slice(0,200)
  if (!message.guild) return;
//#region DELETED MESSAGES
  var msg=`*Message Deleted* \n*Deleted by* \n ${message.author?.username} (${message.author?.id}) \n*Message* \n\`\`\`${msgContent}\`\`\`` 

   const {guild}=message;
   const channel=guild?.channels.cache.get(config.logChannel);
  
  (channel as TextChannel).send(msg);
   //#endregion

//#region GHOST PING DETECTOR
    var mentionsarr:string[]=[]
  if(message.mentions.members && message.mentions.members.size > 0){
    const mentionedusers=JSON.parse(JSON.stringify(message.mentions.toJSON()))
    mentionedusers['users'].forEach((x: string) => {
      mentionsarr.push(`<@${x}>`)
    });
   msg=`*Ghost Ping Detected!*\n*Deleted by* \n${message.author?.username} \n*Message* \n${msgContent} \n *Mentioned Users:* \n ${mentionsarr}`
    message.channel.send(msg)
  }
  //#endregion


})


client.on('messageUpdate',(oldMessage,newMessage)=>{
  if(oldMessage.author?.id===client.user?.id){
    return;
  }
  if(oldMessage.author?.bot){
    return;
  }

  //#region EDITED MESSAGES
  const {guild}=oldMessage;
  if (!oldMessage.guild) return;
   const channel=guild?.channels.cache.get(config.logChannel);
   const oldmsgContent=oldMessage?.content?.slice(0,200)
   const newmsgContent=newMessage?.content?.slice(0,200)
 const  msg=`*Message Edited!*\n*oldMessage* \n \`\`\`${oldmsgContent} ...\`\`\` \n*newMessage* \n\`\`\`${newmsgContent}\`\`\`  \n*Responsible User*\n\`\`\`${newMessage.author?.username} (${newMessage.author?.id})\`\`\`\n*Channel*\n${newMessage.channel}`;
  (channel as TextChannel).send(msg);
//#endregion



//#region GHOST PING DETECTOR
var mentionsarr:string[]=[]
if(oldMessage.mentions.members && oldMessage.mentions.members?.size > 0 && oldMessage.mentions.members?.size>(newMessage.mentions.members?.size??0)){
  const mentionedusers=JSON.parse(JSON.stringify(oldMessage.mentions.toJSON()))
  mentionedusers['users'].forEach((x: string) => {
    mentionsarr.push(`<@${x}>`)
  });
  const msgContent=oldMessage?.content?.slice(0,200)
 const msg=`*Ghost Ping Detected!*\n*Changed by* \n${oldMessage.author?.username} \n*Message* \n${msgContent} ... \n *Mentioned Users:* \n ${mentionsarr}`
  oldMessage.channel.send(msg)
}
//#endregion
  
})


client.login(process.env.BOT_TOKEN)