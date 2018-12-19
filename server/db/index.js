const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const databaseName = pkg.name;

// sequelize instance that communicates with Postgres DB
const db = new Sequelize(process.env.DATABASE_URL ||`postgres://localhost:5432/${databaseName}`, {
  logging: false
});

module.exports = db;
