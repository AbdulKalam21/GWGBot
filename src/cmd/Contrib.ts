import { Command, CommandContext, Embed } from "lib/harmony/mod.ts";

import data from "data/mod.ts";

class Contrib extends Command {
  async execute(ctx: CommandContext) {
    const payload = new Embed()
      .setColor(data.bot.embedColor)
      .setTitle(`Contributing to ${ctx.client.user?.username}`)
      .setDescription(`Fork repository and create Pull Request with your changes.`)
      .addField("Repo", "https://github.com/AKDev21/GWGBot/")
      .addField("Maintainer", "<@345486425032228867>")
      .addField("Contributors", "<@345486425032228867>, <@772451226251165736> and <@430037037098205186>")

    await ctx.message.reply({ embed: payload });
  }
}

export default Contrib;
