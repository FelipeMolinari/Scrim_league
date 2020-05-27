let path;
if (process.env.NODE_ENV == "test") {
  path = "./dotenv/config.env.test";
} else {
  path = "./dotenv/config.env";
}

require("dotenv").config({
  path
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "postgres",
  storage: "./__tests__/database_test.sqlite",

  logging: false,
};
