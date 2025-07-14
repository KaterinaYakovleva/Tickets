'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aircraft extends Model {
    static associate({ Airlines, Seat, Flight}) {
    Aircraft.belongsTo(Airlines, {
      foreignKey: "airline_id",
      as: "airline",
    });
    Aircraft.hasMany(Seat, {
      foreignKey: "aircraft_id",
      as: "seats",
      onDelete: "CASCADE",
    });
    Aircraft.hasMany(Flight, {
      foreignKey: "aircraft_id",
      as: "flights",
    });
    }
  }
  Aircraft.init({
    airline_id: DataTypes.INTEGER,
    model: DataTypes.STRING,
    seats_capacity: DataTypes.INTEGER,
    seats_economy: DataTypes.INTEGER,
    seats_business: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aircraft',
  });
  return Aircraft;
};