const { Sequelize } = require('sequelize');
const dbconfig = require('../config/database.js');

const User = require('../app/models/User');
const Player = require('../app/models/Player');

const models = [ User, Player ];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(dbconfig);

		models.map((model) => model.init(this.connection));
		models.map((model) => model.associate && model.associate(this.connection.models));
	}
}

module.exports = new Database();
