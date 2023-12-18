const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const meditation = sequelize.define('meditation', {
    meditation_ID: {
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
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    audioURL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    backgroundCard: {
        type: DataTypes.STRING,
        allowNull: false
    },
    background_MediaPlayer: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
});

module.exports = meditation;