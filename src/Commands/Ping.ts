import {
    Command,
    CommandContext,
} from "Harmony"

class Ping extends Command {
    name = "ping"

    async execute(ctx: CommandContext) {
        await ctx.message.reply(`Pong: ${ctx.client.gateway.ping} ms`)
    }    
}

export default Ping