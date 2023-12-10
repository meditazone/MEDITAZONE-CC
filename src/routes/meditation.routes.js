const express = require('express');
const router = express.Router();

const meditationController = require('../controllers/meditation.controller');

router.get('/meditation/category/:category', meditationController.getMeditationsByCategoryController);
router.get('/meditation/:id', meditationController.getMeditationByIdController);
router.get('/meditation', meditationController.getAllMeditationController);

router.all('*', (req, res) => res.status(400).json({
    message: 'Bad request!'
}));

module.exports = router;
