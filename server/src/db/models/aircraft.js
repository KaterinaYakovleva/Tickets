'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aircraft extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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