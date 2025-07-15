'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate({Aircraft, Booking}) {
    Seat.belongsTo(Aircraft, {
      foreignKey: "aircraft_id",
      as: "aircraft",
    });
    Seat.hasOne(Booking, {
      foreignKey: "seat_id",
      as: "booking",
    });
    }
  }
  Seat.init({
    aircraft_id: DataTypes.INTEGER,
    seat_number: DataTypes.INTEGER,
    class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};