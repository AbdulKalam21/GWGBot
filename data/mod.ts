const config = Deno.readTextFileSync("data/config.json");

const data = {
  bot: {
    token: JSON.parse(config).token,
    embedColor: "#2aa088",
  },
  guild: {
    id: "",
    channels: {
      logs: "",
      rules: "",
      roles: "",
      welcome: "",
      introduce: "",
    },
  },
};

export default data;
