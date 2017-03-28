'use strict'

module.exports = function (sequelize, DataTypes) {
  var AwardAmountHistory = sequelize.define('dod-contr-awd-amt-hist', {
    dunsnumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    fiscal_year: {
      type: DataTypes.STRING,
      allowNull: false,
      primary_key: true
    },
    award_amount: DataTypes.DOUBLE
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return AwardAmountHistory
}
