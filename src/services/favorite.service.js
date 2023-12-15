const Favorite = require('../models/favorite.model');
const Article = require('../models/article.model');
const Meditation = require('../models/meditation.model');
const Quotes = require('../models/quotes.model');

const addFavorite = async (userId, articleId, meditationId, quotesId) => {
    try {
        // Cek apakah data favorit sudah ada
        const existingFavorite = await Favorite.findOne({
            where: {
                userId: userId,
                articleId: articleId,
                meditationId: meditationId,
                quotesId: quotesId,
            },
        });

        if (existingFavorite) {
            throw new Error('Entry already exists in favorites.');
        }

        // Tambahkan data favorit ke dalam tabel Favorite
        const favorite = await Favorite.create({
            userId: userId,
            articleId: articleId,
            meditationId: meditationId,
            quotesId: quotesId,
        });
        
        return favorite;
    } catch (error) {
        throw error;
    }
};

const updateFavorite = async (userId, favoriteId, updatedData) => {
    try {
        // Periksa apakah data favorit ada
        const existingFavorite = await Favorite.findOne({
            where: {
                userId: userId,
                favorite_ID: favoriteId,
            },
        });

        if (!existingFavorite) {
            throw new Error('Favorite not found.');
        }

        // Perbarui data favorit
        await existingFavorite.update(updatedData);

        return existingFavorite;
    } catch (error) {
        throw error;
    }
};


const deleteFavorite = async (userId, favoriteId) => {
    try {
        // Hapus data favorit berdasarkan ID user dan ID favorit
        await Favorite.destroy({
            where: {
                userId: userId,
                favorite_ID: favoriteId,
            },
        });
    } catch (error) {
        throw error;
    }
};

const getAllFavorites = async () => {
    try {
        // Dapatkan semua data favorit
        const allFavorites = await Favorite.findAll({
            include: [
                { model: Article },
                { model: Meditation },
                { model: Quotes },
            ],
        });

        return allFavorites;
    } catch (error) {
        throw error;
    }
};

const getFavoritesById = async (userId) => {
    try {
        // Dapatkan data favorit berdasarkan ID user
        const favorites = await Favorite.findAll({
            where: {
                userId: userId,
            },
            include: [
                { model: Article },
                { model: Meditation },
                { model: Quotes },
            ],
        });

        return favorites;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    addFavorite,
    updateFavorite,
    deleteFavorite,
    getFavoritesById,
    getAllFavorites,
};
