const Sequelize = require('sequelize');
const db = require('../db');

const Calculation = db.define('calculation', {
  variable: {
    type: Sequelize.STRING,
    allowNull: true
  },
  operation: {
    type: Sequelize.STRING,
    allowNull: false
  },
  result: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})


module.exports = Calculation;
