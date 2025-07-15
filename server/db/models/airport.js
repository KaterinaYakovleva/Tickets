'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    static associate({Flight}) {
    Airport.hasMany(Flight, {
      foreignKey: "departure_airport_id",
      as: "departing_flights",
    });
    Airport.hasMany(Flight, {
      foreignKey: "arrival_airport_id",
      as: "arriving_flights",
    });
    }
  }
  Airport.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};