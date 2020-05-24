const Yup = require("yup");

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

async function validation(email, password) {
  if (!(await schema.isValid({ email, password }))) {
    return false;
  }
  return true;
}

module.exports = validation;
