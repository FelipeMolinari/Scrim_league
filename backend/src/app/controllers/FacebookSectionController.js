const passport = require("passport");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: `${__dirname}/../../dotenv/config.env` });

require("dotenv").config();
require("../auth/passport")(passport);

class SectionController {
  async store(req, res, next) {
    passport.authenticate("facebook", (err, user, info) => {
      req.login(user, { session: false }, async (error) => {
        req.login(user, { session: false }, async (error) => {
          if (error) return next(error);

          const body = { id: user.id, email: user.email };
          const token = jwt.sign({ user: body }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE_IN,
          });
          return res.json({ token });
        });
      });
    })(req, res, next);
  }
}

module.exports = new SectionController();
