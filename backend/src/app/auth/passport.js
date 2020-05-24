const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

require("dotenv").config({ path: "./dotenv/config.env" });

const authenticateUser = require("./authenticate");
const verifyToken = require("./verifyToken");
const facebookAuth = require("./facebookAuth");

const facebookAuthConfig = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:3333/user/facebook/callback",
  profileFields: ["id", "first_name", "last_name", "email"],
};

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      authenticateUser
    )
  );

  passport.use(
    new JWTStrategy(
      {
        //secret we used to sign our JWT
        secretOrKey: process.env.JWT_SECRET,
        //we expect the user to send the token as a header Authorization. bearer <token>
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      verifyToken
    )
  );

  passport.use(new FacebookStrategy(facebookAuthConfig, facebookAuth));
};
