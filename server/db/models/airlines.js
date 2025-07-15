'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airlines extends Model {
    static associate({Aircraft, Flight}) {
      Airlines.hasMany(Aircraft, {
        foreignKey: "airline_id",
        as: "aircrafts",
      });
      Airlines.hasMany(Flight, {
        foreignKey: "airline_id",
        as: "flights",
      });
    }
  }
  Airlines.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    logo_url: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Airlines',
  });
  return Airlines;
};