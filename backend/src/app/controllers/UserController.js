const User = require("../models/User");
const userStoreValidation = require("../validation/userStore");
const userUpdateValidation = require("../validation/userUpdate");

class UserController {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

  async store(req, res) {
    const { firstName, lastName, email, password } = req.body;
    try {
      let user = await User.findOne({ where: { email } });

      if (user) {
        return res.status(400).json({ error: "User already exist!" });
      }
      if (!(await userStoreValidation(req.body))) {
        return res.status(400).json({ error: "Validation fails" });
      }


      user = await User.create({
        firstName,
        lastName,
        email,
        password,
      });
      return res.status(200).json({ message: "User successfully created", id: user.id });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      if (!(await userUpdateValidation(req.body))) {
        return res.status(401).json({ error: "Validation fails" });
      }
      const { oldpassword } = req.body;
      console.log(oldpassword)
      const user = await User.findByPk(req.user.id);

      if (oldpassword && !(await user.checkPassword(oldpassword))) {

        return res.status(401).json({ error: "Password does not match" });
      }
      const newUser = await user.update(req.body);
      return res.json({
        newUser,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
