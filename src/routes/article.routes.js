const express = require('express');
const router = express.Router();

// const ErrorHandler = require('../middleware/error.middleware.js');
const articleController = require('../controllers/article.controller.js');

router.get('/article', articleController.getAllArticle);
router.get('/article/:id', articleController.getArticleById);

router.all('*',  (req, res) => res.status(400).json({ message: 'Bad Request.'}));

module.exports = router;