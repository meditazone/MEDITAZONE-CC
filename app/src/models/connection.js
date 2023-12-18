
const { Sequelize } = require('sequelize');
const config = require('../config/db.config.js');


const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false,
    dialectOptions: config.dialectOptions,
});

module.exports = sequelize;
