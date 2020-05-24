require("dotenv").config({
  path:
    process.env.NODE_ENV == "test"
      ? "./dotenv/config.test.env"
      : "./dotenv/config.env",
});

const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

require("./app/auth/passport")(passport);

const routes = require("./routes.js");

require("./database");

class App {
  constructor() {
    this.server = express();

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(passport.initialize());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
