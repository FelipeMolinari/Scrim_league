const { Sequelize, Model } = require('sequelize');
const bcrypt = require('bcrypt');
class User extends Model {
	static init(sequelize) {
		super.init(
			{
				firstName: Sequelize.STRING,
				lastName: Sequelize.STRING,
				email: Sequelize.STRING,
				birthday: Sequelize.DATE,
				gender: Sequelize.ENUM('male', 'female'),
				bio: Sequelize.STRING(600),

				facebookId: Sequelize.STRING,
				password: Sequelize.VIRTUAL,
				password_hash: Sequelize.STRING
			},
			{
				timestamps: true,
				sequelize,
				tableName: 'users'
			}
		);

		this.addHook('beforeSave', async (user) => {
			if (user.password) {
				user.password_hash = await bcrypt.hash(user.password, 10);
			}
		});

		return this;
	}
	static associate(models) {
		this.hasOne(models.Player, { foreignKey: { name: 'user_id', allowNull: false } });
	}
	async checkPassword(password) {
		return await bcrypt.compare(password, this.password_hash);
	}
}

module.exports = User;
