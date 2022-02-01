import { CommandClient, Embed, Extension, Message } from "lib/harmony/mod.ts";

import data from "data/mod.ts";

class MessageLog extends Extension {
  name = MessageLog.name;

  constructor(cc: CommandClient) {
    super(cc);

    this.listen("messageDelete", async (_, msg: Message) => {
      const guild = await this.client.guilds.get(data.guild.id);

      if (guild != undefined) {
        const logs = await guild.channels.get(data.guild.channels.logs);

        if (logs != undefined) {
          if (logs.isText()) {
            const payload = new Embed()
              .setColor("RED")
              .setTitle(`Message deleted by ${msg.author.tag}`)
              .setDescription(msg.content)
              .addField("User ID", msg.author.id)
              .addField("Message ID", msg.id)
              .addField("Deleted in", `<#${msg.channel.id}>`)

            await logs.send({ embed: payload });
          } else {
            throw new Error("Selected channel is not a text channel");
          }
        } else {
          throw new Error("Channel ID is undefined");
        }
      } else {
        throw new Error("Guild ID is undefined");
      }
    });
  }
}

export default MessageLog;
