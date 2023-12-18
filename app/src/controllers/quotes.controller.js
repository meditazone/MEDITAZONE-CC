const quotesService = require('../services/quotes.service');

const getAllQuotesController = async (req, res) => {
    try {
        const quotes = await quotesService.getAllQuotes();
        
        return res.json({
            message: 'Success GET All Quotes.',
            data: quotes,
        });
    } catch (error) {
        console.error('Error fetching quotes:', error);
        return res.status(500).json({
            message: 'Error fetching quotes.',
        });
    }
};

const getQuoteByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const quote = await quotesService.getQuoteById(id);

        if (!quote) {
            return res.status(404).json({
                message: 'Quote not found.',
            });
        }

        return res.json({
            message: 'Success GET Quote By ID.',
            data: quote,
        });
    } catch (error) {
        console.error('Error fetching quote by ID:', error);
        return res.status(500).json({
            message: 'Error fetching quote by ID.',
        });
    }
};

const getQuoteByAuthorController = async (req, res) => {
    try {
        const { author } = req.params;
        const quote = await quotesService.getQuoteByAuthor(author);

        if (!quote) {
            return res.status(404).json({
                message: 'Quote not found.'
            });
        }

        return res.status(200).json({
            message: 'Success GET Quote by Author',
            data: quote,
        });
    } catch (error) {
        console.error('Error fetching', error);
        return res.status(500).json({
            message: 'Error fetching quote by author'
        });
    }
};

module.exports = {
    getAllQuotesController,
    getQuoteByIdController,
    getQuoteByAuthorController,
};