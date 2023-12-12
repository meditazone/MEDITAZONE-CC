const quotesModel = require('../models/quotes.model');

const getAllQuotes = async () => {
    try {
        const quotes = await quotesModel.findAll();
        return quotes;
    } catch (error) {
        throw error;
    }
};

const getQuoteById = async (id) => {
    try {
        const quote = await quotesModel.findByPk(id);
        return quote;
    } catch (error) {
        throw error;
    }
};

const getQuoteByAuthor = async (author) => {
    try {
        const quote = await quotesModel.findAll({
            where: {
                author: author,
            },
        });
        return quote;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllQuotes,
    getQuoteById,
    getQuoteByAuthor,
}
