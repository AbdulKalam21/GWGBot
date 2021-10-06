import DiscordJS, { Intents, MessageEmbed, TextChannel } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
var config=require('./config.json')
const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})

client.on('ready', () => {
  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, 'commands'),
    // Allow importing of .ts files if you are using ts-node
    typeScript: true,
    testServers:config.guildIDs
  }).setDefaultPrefix("!")
})



client.on('guildMemberAdd',(member)=>{
  

  const embed=new MessageEmbed()
  .setColor('YELLOW')
  .addField("Welcome",`Everyone welcome 👋 **${member.nickname}** to ${member.guild.name}`)
  .setThumbnail(member.user.avatarURL.toString())
  .setTimestamp()
  console.log("Member joined")
 // member.guild.systemChannel?.send({embeds:[embed]})
  
  
})

client.on('messageDelete',(message)=>{
  if(message.author?.id===client.user?.id){
    return;
  }


  if (!message.guild) return;

  const msg=`Message Deleted \n**Deleted by** \n${message.author?.username} (${message.author?.id}) \n**Message** \n${message.content}`
  //const embed=new MessageEmbed()
    //.setColor('RED')
    //.addField("Message Deleted!",`**Deleted by** \n${message.author?.username} (${message.author?.id}) \n**Message** \n${message.content}`)
   //.setTimestamp()
   const {guild}=message;
   const channel=guild?.channels.cache.get(config.logChannel);
  
  (channel as TextChannel).send(msg);
   
    
  if(message.mentions.members && message.mentions.members.size > 0){
    const embed=new MessageEmbed()
    .setColor('RED')
    .addField("Ghost Ping Detected!",`**Deleted by** \n${message.author?.username} \n**Message** \n${message.content}`)
   .setTimestamp()
   
    message.channel.send({embeds:[embed]})
  }
  
})


client.on('messageUpdate',(oldMessage,newMessage)=>{
  if(oldMessage.author?.id===client.user?.id){
    return;
  }
  const {guild}=oldMessage;
  if (!oldMessage.guild) return;
  const embed=new MessageEmbed()
  .setColor('RED')
  .addField("ℹ Message Edited!",`**oldMessage** \n${oldMessage} \n**newMessage** \n${newMessage}  \n** Responsible User**\n${newMessage.author?.username} (${newMessage.author?.id})\n**Channel**\n${newMessage.channel}`)
  const channel=guild?.channels.cache.get(config.logChannel);
  
  (channel as TextChannel).send({embeds:[embed]});
})


client.login(config.token)