const { DataTypes } = require('sequelize');
const sequelize = require('./connection');
const { v4: uuidv4 } = require('uuid');
const Article = require('./article.model');
const Meditation = require('./meditation.model');
const Quotes = require('./quotes.model');
const User = require('./user.model');

const Favorite = sequelize.define('favorites', {
    favorite_ID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: () => uuidv4(),
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    articleId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    meditationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    quotesId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: true,
});

// Define associations
Favorite.belongsTo(User, { foreignKey: 'userId' });
Favorite.belongsTo(Article, { foreignKey: 'articleId' });
Favorite.belongsTo(Meditation, { foreignKey: 'meditationId' });
Favorite.belongsTo(Quotes, { foreignKey: 'quotesId' });

module.exports = Favorite;
