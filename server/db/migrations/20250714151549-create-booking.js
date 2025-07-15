'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      booking_references: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Users",
          key: "id",
        },
      },
      flight_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Flights",
          key: "id",
        },
      },
      seat_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Seats",
          key: "id",
        },
      },
      passenger_first_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      passenger_last_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      passenger_passport: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      class: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      status: {
        defaultValue: "reserved",
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
    await queryInterface.dropTable('Bookings');
  }
};