require("dotenv").config({
  path:
    process.env.NODE_ENV == "test"
      ? "./dotenv/config.test.env"
      : "./dotenv/config.env",
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
