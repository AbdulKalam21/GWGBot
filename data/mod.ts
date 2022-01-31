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
    introduce: "",
  },
};

export default data;
