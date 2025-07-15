'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flight_number: {
        allowNull: false,
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
      aircraft_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Aircraft",
          key: "id",
        },
      },
      departure_airport_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Airports",
          key: "id",
        },
      },
      arrival_airport_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Airports",
          key: "id",
        },
      },
      departure_time: {
        allowNull: false,
        type: Sequelize.TIME,
      },
      arrival_time: {
        allowNull: false,
        type: Sequelize.TIME,
      },
      duration: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      economy_price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      business_price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      available_seats: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      status: {
        defaultValue: "scheduled",
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Flights');
  }
};