const faker = require("faker")
const { factory } = require("factory-girl")

const User = require("../src/app/models/User")

factory.define('User', User, {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(10),
})

module.exports = factory