const express = require('express');
const router = express.Router();

const ErrorHandler = require('../middleware/error.middleware.js');
const quoteController = require('../controllers/quotes.controller.js')
const { errorMonitor } = require('keyv');

router.get('/quotes', quoteController.getAllQuotesController);
router.get('/quotes/:id', quoteController.getQuoteByIdController);

router.all('*',  (req, res) => res.status(400).json({ message: 'Bad Request.'}))

module.exports = router;