const Sequelize = require('sequelize');
const db = require('../index');

const Calculation = db.define('calculation', {
  operation: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  value: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
})


module.exports = Calculation;
