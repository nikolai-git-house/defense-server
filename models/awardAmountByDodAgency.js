'use strict'

module.exports = function (sequelize, DataTypes) {
  var AwardAmountByDodAgency = sequelize.define('dod-contr-awd-amt-by-dod-agency', {
    dunsnumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    fundingrequestingagencyid: {
      type: DataTypes.STRING,
      allowNull: false,
      primary_key: true
    },
    pct_award_amount: DataTypes.DOUBLE
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return AwardAmountByDodAgency
}
