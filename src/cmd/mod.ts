import { CommandClient, Extension } from "lib/harmony/mod.ts";

import Ping from "cmd/Ping.ts";
import Contrib from "cmd/Contrib.ts";

class HandleCmd extends Extension {
  name = HandleCmd.name;

  constructor(cc: CommandClient) {
    super(cc);

    this.client.commands.add(Ping);
    this.client.commands.add(Contrib);
  }
}

export default HandleCmd;
