#!/usr/bin/env deno run --allow-net --allow-read --import-map=import_map.json

import { GatewayIntents } from "lib/harmony/mod.ts";

import token from "data/mod.ts";
import GWGBot from "src/GWGBot.ts";

const bot = new GWGBot();

bot.connect(
  token.token, [
    GatewayIntents.GUILDS,
    GatewayIntents.GUILD_MESSAGES
  ]
)
