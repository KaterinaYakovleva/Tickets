'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Aircraft", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      airline_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Airlines",
          key: "id",
        },
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      seats_capacity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      seats_economy: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      seats_business: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Aircraft');
  }
};