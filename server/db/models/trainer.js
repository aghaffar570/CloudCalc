const Sequelize = require('sequelize');
const db = require('../index');

const Trainer = db.define('trainer', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    // validate: {

    // }
  }
})

module.exports = Trainer;
