import {
  Embed,
  Member,
  Extension,
  CommandClient,
} from "lib/harmony/mod.ts";

// TODO: Add guild and channel ids to data/mod.ts
class Welcome extends Extension {
  name = Welcome.name;

  constructor(cc: CommandClient) {
    super(cc);

    this.listen("guildMemberAdd", async (_, member: Member) => {
      const guild = await this.client.guilds.get("");

      if (guild != undefined) {
        const welcome = await guild.channels.get("");

        if (welcome != undefined) {
          if (welcome.isText()) {
            const payload = new Embed()
              .setColor("#2aa088")
              .setTitle(`${member.displayName} welcome to ${guild.name}!`)
              .setThumbnail(member.user.avatarURL())
              .setDescription(
                "- Read the rules <#id>\n"
                + "- Get some roles <#id>"
                + "- Introduce yourself at <#id>"
              )
              .setFooter(`You are our ${guild.memberCount}th member`, guild.iconURL())

            await welcome.send({ embed: payload });
          }
        }
      }
    });
  }
}

export default Welcome;
