'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flight_number: DataTypes.INTEGER,
    airline_id: DataTypes.INTEGER,
    aircraft_id: DataTypes.INTEGER,
    departure_airport_id: DataTypes.INTEGER,
    arrival_airport_id: DataTypes.INTEGER,
    departure_time: DataTypes.TIME,
    arrival_time: DataTypes.TIME,
    duration: DataTypes.INTEGER,
    economy_price: DataTypes.INTEGER,
    business_price: DataTypes.INTEGER,
    available_seats: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};