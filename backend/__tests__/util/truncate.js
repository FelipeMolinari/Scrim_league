const database = require("../../src/database")

function truncate() {
  return Promise.all(Object.keys(database.connection.models).map(key => {
    return database.connection.models[key].destroy({
      truncate: true, force: true
    })
  }))
}

module.exports = truncate