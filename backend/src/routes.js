const { Router } = require("express");
const passport = require("passport");

const UserController = require("./app/Controllers/UserController");
const SectionController = require("./app/Controllers/SectionController");
const FacebookSectionController = require("./app/Controllers/FacebookSectionController");

const routes = new Router();

//Public Routes:

routes.get("/user", UserController.index);
routes.post("/user", UserController.store);

//Facebook create account

routes.get(
  "/user/facebook",
  passport.authenticate("facebook", {
    session: false,
    scope: ["email"],
  })
);

routes.get("/user/facebook/callback", FacebookSectionController.store);

// Section
routes.post("/login", SectionController.store);

//Secure Routes:

routes.use(
  passport.authenticate("jwt", {
    session: false,
  })
);

routes.put("/login/update", UserController.update);

module.exports = routes;
