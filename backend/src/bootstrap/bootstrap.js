let path;
if (process.env.NODE_ENV == "test") {
  console.log("ENTROU EM TESTE");
  path = "./dotenv/config.test.env";
} else {
  console.log("ENTROU EM DEV");

  path = "./dotenv/config.env";
}

module.exports = path;
