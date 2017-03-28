'use strict'

module.exports = function (sequelize, DataTypes) {
  var ContractVolumeHistory = sequelize.define('dod-contr-cont-vol-hist', {
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
    num_of_awards: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return ContractVolumeHistory
}


