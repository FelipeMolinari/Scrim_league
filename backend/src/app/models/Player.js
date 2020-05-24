const { Sequelize, Model } = require("sequelize");
class Player extends Model {
  static init(sequelize) {
    super.init(
      {
        nickname: Sequelize.STRING,
      },
      {
        timestamps: true,
        sequelize,
        tableName: "player",
      }
    );
    return this;
  }
  static associate(models) {}
  async checkPassword(password) {
    return await bcrypt.compare(password, this.password_hash);
  }
}

module.exports = Player;
