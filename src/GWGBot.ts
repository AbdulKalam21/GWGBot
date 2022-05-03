import { CommandClient, Command, CommandContext, Client, Message, GatewayIntents, Member, Embed } from "Harmony"
import Constants from "Common/Constants.ts"
import Ping from "Commands/Ping.ts"
import About from "Commands/About.ts"

const GWGBot = new CommandClient({
    prefix: "!",
    allowDMs: false,
    allowBots: false,
    caseSensitive: false,
    mentionPrefix: false,
    presence: { 
        activity: {
          name: "type !help",
          type: "PLAYING",
        },
        status: "idle"
    }

})

GWGBot.on("ready", () => {
    console.log(`Logged in as ${GWGBot.user?.tag}!`)
})

GWGBot.on("guildMemberAdd", async (member) => {
	// TODO: Move this code to a separate file 
    const guild = await GWGBot.guilds.get(Constants.GUILD_ID)

    if (guild != undefined) {
        const welcome = await guild.channels.get(Constants.WELCOME_CHANNEL_ID) 

        if (welcome != undefined) {
            if (welcome.isText()) {
            const embed = new Embed()
              .setColor(Constants.RANDOM_EMBED_COLORS)
              .setTitle(`Welcome to ${guild.name} ${member.user.username}`)
              .setThumbnail(member.user.avatarURL())
              .setDescription(
                `- Read the rules <#${Constants.RULES_CHANNEL_ID}>\n` +
                `- Get some roles <#${Constants.SELF_ROLES_CHANNEL_ID}>\n` +
                `- Introduce yourself <#${Constants.WELCOME_CHANNEL_ID}>`,
              )
              .setFooter(`You are our ${guild.memberCount}th member`, guild.iconURL());

            await welcome.send({ embed: embed });
            }

        }

    }
})  

GWGBot.commands.add(Ping)
GWGBot.commands.add(About)
GWGBot.connect(Constants.BOT_TOKEN, [GatewayIntents.GUILDS, GatewayIntents.GUILD_MEMBERS, GatewayIntents.GUILD_MESSAGES]);
