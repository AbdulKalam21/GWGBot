const config = Deno.readTextFileSync("data/config.json");

const data = {
  bot: {
    token: JSON.parse(config).token,
  },
  guild: {
    id: "",
    rules: "",
    roles: "",
    welcome: "",
    feedback: "",
    introduce: "",
  },
};

export default data;
