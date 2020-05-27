const User = require("../models/User");

const authenticateUser = async (email, password, done) => {
  try {

    const userExist = await User.findOne({ where: { email } });
    if (userExist) {
      const passwordsMatch = await userExist.checkPassword(password);

      if (passwordsMatch) {
        return done(null, userExist, { message: "Logged in Successfully" });
      } else {
        return done(null, false, { message: "Password does not match" });
      }
    } else {
      return done(null, false, { message: "User not found" });
    }
  } catch (error) {
    done(error);
  }
};
module.exports = authenticateUser;
