import { CommandClient, Embed, Extension, Member } from "lib/harmony/mod.ts";

import data from "data/mod.ts";

class Welcome extends Extension {
  name = Welcome.name;

  constructor(cc: CommandClient) {
    super(cc);

    this.listen("guildMemberAdd", async (_, member: Member) => {
      const guild = await this.client.guilds.get(data.guild.id);

      if (guild != undefined) {
        const welcome = await guild.channels.get(data.guild.channels.welcome);

        if (welcome != undefined) {
          if (welcome.isText()) {
            const payload = new Embed()
              .setColor("#2aa088")
              .setTitle(`${member.displayName} welcome to ${guild.name}!`)
              .setThumbnail(member.user.avatarURL())
              .setDescription(
                `- Read the rules <#${data.guild.channels.rules}>\n` +
                `- Get some roles <#${data.guild.channels.roles}>\n` +
                `- Introduce yourself at <#${data.guild.channels.introduce}>`,
              )
              .setFooter(`You are our ${guild.memberCount}th member`, guild.iconURL());

            await welcome.send({ embed: payload });
          } else {
            throw new Error("Selected channel is not a text channel");
          }
        } else {
          throw new Error("Channel ID is invalid or undefined");
        }
      } else {
        throw new Error("Guild ID is invalid or undefined");
      }
    });
  }
}

export default Welcome;
