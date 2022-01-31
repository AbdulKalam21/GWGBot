import { Command, CommandContext, CommandOptions } from "lib/harmony/mod.ts";

class Ping extends Command {
  static cmd = Ping.name;

  static meta: CommandOptions = {
    name: this.cmd.toLocaleLowerCase(),
    description: "Get gateway ping",
  };

  async execute(ctx: CommandContext) {
    const ping = ctx.client.gateway.ping;

    await ctx.message.reply(`Pong! (${ping}ms)`);
  }
}

export default Ping;
