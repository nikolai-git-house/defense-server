'use strict'

module.exports = function (sequelize, DataTypes) {
  var AwardAmountByPsc = sequelize.define('dod-contr-awd-amt-by-psc', {
    dunsnumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    psc_code: {
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
  return AwardAmountByPsc
}
