const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const meditation = sequelize.define('meditation', {
    meditation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.TIME,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photoUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
});

module.exports = meditation;