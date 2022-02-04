import { Command, CommandContext } from "lib/harmony/mod.ts";

class Ping extends Command {
  async execute(ctx: CommandContext) {
    await ctx.message.reply(`Pong! (${ctx.client.gateway.ping}ms)`);
  }
}

export default Ping;
