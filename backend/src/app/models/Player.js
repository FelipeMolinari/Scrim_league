const { Sequelize, Model } = require('sequelize');
class Player extends Model {
	static init(sequelize) {
		super.init(
			{
				username: Sequelize.STRING
			},
			{
				timestamps: true,
				sequelize,
				tableName: 'players'
			}
		);

		return this;
	}

	static associate(models) {
		this.removeAttribute('id');
		this.belongsTo(models.User, { foreignKey: { name: 'user_id', allowNull: false } });
	}
}

module.exports = Player;
