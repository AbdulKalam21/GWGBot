#!/usr/bin/env deno run --allow-net --allow-read --import-map=import_map.json

import { GatewayIntents } from "lib/harmony/mod.ts";

import data from "data/mod.ts";
import GWGBot from "src/GWGBot.ts";

const bot = new GWGBot();
const token = data.bot.token;

bot.connect(
  token,
  [
    GatewayIntents.GUILDS,
    GatewayIntents.GUILD_MEMBERS,
    GatewayIntents.GUILD_MESSAGES,
  ],
);
