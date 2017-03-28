'use strict'

module.exports = function (sequelize, DataTypes) {
  var AwardAmountByNaics = sequelize.define('dod-contr-awd-amt-by-naics', {
    dunsnumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    naics_code: {
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
  return AwardAmountByNaics
}
