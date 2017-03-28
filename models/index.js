'use strict'

var fs = require('fs')
var path = require('path')
var Sequelize = require('sequelize')
var basename = path.basename(module.filename)
var env = process.env.NODE_ENV || 'development'
var config = require('../config/config.json')[env]
var db = {}
var sequelize
// sequelize = new Sequelize(config.development.dbUri)

sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'postgres',
  define: {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  },

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function (file) {
    var model_name = path.basename(file, '.js')
    var model = sequelize['import'](path.join(__dirname, file))
    db[model_name] = model;
  })

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
