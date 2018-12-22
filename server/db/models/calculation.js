const Sequelize = require('sequelize');
const db = require('../index');

const Calculation = db.define('calculation', {
  operation: {
    type: Sequelize.STRING,
    allowNull: false
  },
  value: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})


module.exports = Calculation;
