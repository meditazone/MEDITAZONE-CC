const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const User = sequelize.define('User', {
    userID: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING 
    },
    email: {
        type: DataTypes.STRING 
    },
    password: {
        type: DataTypes.STRING 
    },
    photoProfile: {
        type: DataTypes.STRING
    },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}); 
module.exports = User;