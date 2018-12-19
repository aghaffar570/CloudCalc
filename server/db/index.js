const Sequelize = require('sequelize');

// sequelize instance that communicates with Postgres DB
const db = new Sequelize(process.env.DATABASE_URL ||'postgres://localhost:5432/hydra', {
  logging: false
});

module.exports = db;
