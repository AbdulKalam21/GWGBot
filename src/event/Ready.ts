import { CommandClient, Extension } from "lib/harmony/mod.ts";

class Ready extends Extension {
  name = Ready.name;

  constructor(cc: CommandClient) {
    super(cc);

    this.listen("ready", () => {
      console.log(`Logged in as ${this.client.user?.tag}`);

      this.client.setPresence({
        activity: {
          name: "Games With Gabe",
          type: "PLAYING",
        },
      });
    });
  }
}

export default Ready;
