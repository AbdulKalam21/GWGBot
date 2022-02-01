import { CommandClient } from "lib/harmony/mod.ts";

import HandleCmd from "cmd/mod.ts";

import Ready from "event/Ready.ts";
import Welcome from "event/Welcome.ts";
import LogDeleted from "event/LogDeleted.ts";

class GWGBot extends CommandClient {
  constructor() {
    super({
      prefix: "!",
      allowDMs: false,
      allowBots: false,
      caseSensitive: false,
      mentionPrefix: false,
    });

    // Register all commands
    this.extensions.load(HandleCmd);

    // Register all events
    this.extensions.load(Ready);
    this.extensions.load(Welcome);
    this.extensions.load(LogDeleted);
  }
}

export default GWGBot;
