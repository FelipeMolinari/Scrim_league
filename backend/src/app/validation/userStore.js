const Yup = require("yup");

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
});

async function validation(body) {
  if (!(await schema.isValid(body))) {
    return false;
  }
  return true;
}

module.exports = validation;
