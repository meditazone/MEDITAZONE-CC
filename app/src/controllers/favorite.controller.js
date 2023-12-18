const favoriteService = require('../services/favorite.service');
const userService = require('../services/user.service');

const addFavoriteController = async (req, res) => {
    try {
        const userId = req.body.userId;
        const articleId = req.body.articleId !== undefined ? req.body.articleId : null;
        const meditationId = req.body.meditationId !== undefined ? req.body.meditationId : null;
        const quotesId = req.body.quotesId !== undefined ? req.body.quotesId : null;;

        // Coba menambahkan data favorit
        const favorite = await favoriteService.addFavorite(userId, articleId, meditationId, quotesId);

        return res.status(201).json({
            message: 'Success: Favorite added successfully.',
            data: favorite,
        });
    } catch (error) {
        console.error('Error adding favorite:', error);

        // Tangani error khusus
        if (error.message === 'Entry already exists in favorites.') {
            return res.status(400).json({
                message: 'Error: Favorite entry already exists.',
            });
        }

        return res.status(500).json({
            message: 'Internal Server Error.',
        });
    }
};

const updateFavoriteController = async (req, res) => {
    try {
        const userId = req.params.userId;
        const favoriteId = req.params.favoriteId;
        const updatedData = req.body;

        // Perbarui data favorit
        await favoriteService.updateFavorite(userId, favoriteId, updatedData);

        return res.json({
            message: 'Success: Favorite updated successfully.',
        });
    } catch (error) {
        console.error('Error updating favorite:', error);
        return res.status(500).json({
            message: 'Internal Server Error.',
        });
    }
};

const getAllFavoriteController = async (req, res) => {
    try {
        // Dapatkan semua data favorit
        const allFavorites = await favoriteService.getAllFavorites();

        // Struktur data favorit untuk respons yang lebih informatif
        const formattedFavorites = allFavorites.map((favorite) => {
            return {
                favorite_ID: favorite.favorite_ID,
                userId: favorite.userId,
                article: favorite.article,
                meditation: favorite.meditation,
                quotes: favorite.quotes,
                createdAt: favorite.createdAt,
                updatedAt: favorite.updatedAt,
            };
        });

        return res.json({
            message: 'Success: Get All Favorites',
            data: formattedFavorites,
        });
    } catch (error) {
        console.error('Error fetching all favorites:', error);
        return res.status(500).json({
            message: 'Internal Server Error.',
        });
    }
};

const deleteFavoriteController = async (req, res) => {
    try {
        const userId = req.params.userId;
        const favoriteId = req.params.favoriteId;

        // Hapus data favorit
        await favoriteService.deleteFavorite(userId, favoriteId);

        return res.json({
            message: 'Success: Favorite deleted successfully.',
        });
    } catch (error) {
        console.error('Error deleting favorite:', error);
        return res.status(500).json({
            message: 'Internal Server Error.',
        });
    }
};

const getFavoriteByIdController = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Dapatkan data favorit berdasarkan ID user
        const favorites = await favoriteService.getFavoritesById(userId);

        // Dapatkan informasi user
        const user = await userService.getUserById(userId);

        // Inisialisasi objek respons
        const response = {
            userId: user.user_ID,
            nama: user.name,
            quotes: [],
            article: [],
            meditation: [],
        };

        // Isi objek respons dengan data favorit
        favorites.forEach((favorite) => {
            if (favorite.quotes) {
                response.quotes.push(favorite.quotes);
            } else if (favorite.article) {
                response.article.push(favorite.article);
            } else if (favorite.meditation) {
                response.meditation.push(favorite.meditation);
            }
        });

        return res.json({
            message: 'Success: Get Favorites by ID',
            data: response,
        });
    } catch (error) {
        console.error('Error fetching favorites by ID:', error);
        return res.status(500).json({
            message: 'Internal Server Error.',
        });
    }
};

module.exports = {
    addFavoriteController,
    updateFavoriteController,
    deleteFavoriteController,
    getFavoriteByIdController,
    getAllFavoriteController,
};
