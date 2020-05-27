"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.ENUM,
        values: ["male", "female"],
      },
      bio: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      facebookId: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      password_hash: {
        type: Sequelize.STRING,
        allowNull: true,
        validade: {
          validadeIfFacebookUser(value) {
            if (value == null && this.facebookId == null) {
              throw new Error(
                "Your password only can be null if you're authenticating with facebook."
              );
            }
          },
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
