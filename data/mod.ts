const config = Deno.readTextFileSync("data/config.json");

const data = {
  bot: {
    token: JSON.parse(config).token,
    embedColor: "#2aa088",
  },
  guild: {
    id: "",
    channels: {
      rules: "",
      roles: "",
      welcome: "",
      feedback: "",
      introduce: "",
    },
  },
};

export default data;
