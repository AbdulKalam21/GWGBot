import { Command, CommandContext, Embed } from "Harmony"
import Constants from "Common/Constants.ts"

class About extends Command {
    name = "about"

    async execute(ctx: CommandContext) {

        const embed = new Embed()
        .setColor(Constants.RANDOM_EMBED_COLORS)
        .setTitle(`Hello i am ${ctx.client.user?.username}`)
        .setDescription("About Me, I am a general purpose bot written for\n Games With Gabe's official discord server")
        .addField("Github Repository:", "https://github.com/AbdulKalam21/GWGBot")
        .addField("Repository Maintainer:","<@345486425032228867>")
        .addField("Contributors:", "<@772451226251165736>, <@430037037098205186>, <@345486425032228867>")

    await ctx.message.reply({ embed: embed });
  }
}

export default About;
