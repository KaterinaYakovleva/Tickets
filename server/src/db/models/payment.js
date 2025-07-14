'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate({Booking}) {
      Payment.belongsTo(Booking, {
        foreignKey: "booking_id",
        as: "booking",
      });
    }
  }
  Payment.init({
    booking_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    transaction_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};