import { 
    CommandClient,
    Command,
    CommandContext,
    Client,
    Message,
    GatewayIntents
} from "https://deno.land/x/harmony/mod.ts"

import Constants from "./Constants.ts"

const GWGBot = new CommandClient({
    prefix: "!",
    allowDMs: false,
    allowBots: false,
    caseSensitive: false,
    mentionPrefix: false,
})

GWGBot.on('ready', () => {
  console.log(`Logged in as ${GWGBot.user?.tag}!`)
})

class Ping extends Command {
    name = "ping"

    async execute(ctx: CommandContext) {
        await ctx.message.reply(`Pong: ${ctx.client.gateway.ping} ms`)
    }    
}

GWGBot.commands.add(Ping)
GWGBot.connect(Constants.BOT_TOKEN, [GatewayIntents.GUILDS, GatewayIntents.GUILD_MEMBERS, GatewayIntents.GUILD_MESSAGES]);
