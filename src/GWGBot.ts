import { CommandClient, Command, CommandContext, Client, Message, GatewayIntents, Member } from "Harmony"
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

GWGBot.commands.add(Ping)
GWGBot.commands.add(About)
GWGBot.connect(Constants.BOT_TOKEN, [GatewayIntents.GUILDS, GatewayIntents.GUILD_MEMBERS, GatewayIntents.GUILD_MESSAGES]);
