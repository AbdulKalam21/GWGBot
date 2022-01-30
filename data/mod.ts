const config = Deno.readTextFileSync("data/config.json");

const data = {
  token: JSON.parse(config).token,
}

export default data;
