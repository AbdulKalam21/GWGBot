import { CommandClient } from "lib/harmony/mod.ts";

import Ready from "event/Ready.ts";
import Welcome from "event/Welcome.ts";
import HandleCmd from "cmd/mod.ts";

class GWGBot extends CommandClient {
  constructor() {
    super({
      prefix: "!",
      allowDMs: false,
      allowBots: false,
      caseSensitive: false,
      mentionPrefix: false,
    });

    // Register all events
    this.extensions.load(Ready);
    this.extensions.load(Welcome);

    // Register all commands
    this.extensions.load(HandleCmd);
  }
}

export default GWGBot;
