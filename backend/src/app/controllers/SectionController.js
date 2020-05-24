const passport = require("passport");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: `${__dirname}/../../dotenv/config.env` });

require("dotenv").config();
require("../auth/passport")(passport);

class SectionController {
  async store(req, res, next) {
    passport.authenticate("local", async (err, user, info) => {
      try {
        if (err || !user) {
          const error = new Error(`An Error occured - ${info.message}`);

          return next(error);
        }

        req.login(user, { session: false }, async (error) => {
          if (error) return next(error);

          const body = { id: user.id, email: user.email };
          const token = jwt.sign({ user: body }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE_IN,
          });
          return res.json({ token });
        });
      } catch (error) {
        return next(error);
      }
    })(req, res, next);
  }
}

module.exports = new SectionController();
