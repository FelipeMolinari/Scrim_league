const faker = require("faker")
const { factory } = require("factory-girl")

const User = require("../src/app/models/User")
const Player = require("../src/app/models/Player")


factory.define('User', User, {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(10),
})


factory.define('Player', Player, {
  nickname: faker.internet.userName(),

})


module.exports = factory