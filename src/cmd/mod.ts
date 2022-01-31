import { CommandClient, Extension } from "lib/harmony/mod.ts";

import Ping from "cmd/Ping.ts";

class HandleCmd extends Extension {
  name = HandleCmd.name;

  constructor(cc: CommandClient) {
    super(cc);

    this.client.commands.add(Ping);
  }
}

export default HandleCmd;
