const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favorite.controller');

router.post('/favorite', favoriteController.addFavoriteController);
router.put('/favorite/:userId/:favoriteId', favoriteController.updateFavoriteController);
router.delete('/favorite/:userId/:favoriteId', favoriteController.deleteFavoriteController);
router.get('/favorite/:userId', favoriteController.getFavoriteByIdController);
router.get('/favorite', favoriteController.getAllFavoriteController);

router.all('*', (req, res) => res.status(400).json({ message: 'Bad Request.' }));

module.exports = router;
