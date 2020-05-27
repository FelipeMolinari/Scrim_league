
const User = require("../models/User");

const facebookAuth = async (accessToken, refreshToken, profile, done) => {
  const { email, id, first_name, last_name } = profile._json;
  try {
    let user = await User.findOne({ where: { email } });
    if (user) {
      return done(null, user, {
        message: "User successfully logged",
      });
    }

    const newUser = await User.create({
      firstName: first_name,
      lastName: last_name,
      email,
      facebookId: id,
    });

    return done(null, newUser, {
      message: "User successfully created",
    });
  } catch (err) {
    return done(err);
  }
};

module.exports = facebookAuth;

// const facebookAuth = async (accessToken, refreshToken, profile, done) => {
//   const { email, id, first_name, last_name } = profile._json;
//   try {
//     console.log(profile)
//     const newUser = {
//       firstName: first_name,
//       lastName: last_name,
//       email,
//       facebookId: id,
//     };

//     return done(null, newUser, {
//       message: "User accepted",
//     });
//   } catch (err) {
//     return done(err);
//   }
// };

// module.exports = facebookAuth;
