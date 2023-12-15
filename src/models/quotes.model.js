const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const Quotes = sequelize.define('Quotes', {
    quote_ID: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    quote: {
        type: DataTypes.STRING 
    },
    author: {
        type: DataTypes.STRING 
    },
    imageUrl: {
        type: DataTypes.STRING, 
    },
}, {
    timestamps: false,
});

module.exports = Quotes;