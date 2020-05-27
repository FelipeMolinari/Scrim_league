const User = require("../models/User");

const verifyToken = async (jwt_payload, done) => {
  try {
    const user = await User.findOne({
      where: { id: jwt_payload.user_id },
    });

    if (user) {
      return done(null, user);
    }
    //Pass the user details to the next middleware
    return done(null, false);
  } catch (error) {
    done(error, false);
  }
};
module.exports = verifyToken;
