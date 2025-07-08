'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flight_number: {
        type: Sequelize.INTEGER
      },
      airline_id: {
        type: Sequelize.INTEGER
      },
      aircraft_id: {
        type: Sequelize.INTEGER
      },
      departure_airport_id: {
        type: Sequelize.INTEGER
      },
      arrival_airport_id: {
        type: Sequelize.INTEGER
      },
      departure_time: {
        type: Sequelize.TIME
      },
      arrival_time: {
        type: Sequelize.TIME
      },
      duration: {
        type: Sequelize.INTEGER
      },
      economy_price: {
        type: Sequelize.INTEGER
      },
      business_price: {
        type: Sequelize.INTEGER
      },
      available_seats: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};