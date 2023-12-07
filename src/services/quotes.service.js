const QuotesModel = require('../models/quotes.model');

const getAllQuotes = async () => {
    try {
        const quotes = await QuotesModel.findAll();
        return quotes;
    } catch (error) {
        throw error;
    }
};

const getQuoteById = async (id) => {
    try {
        const quote = await QuotesModel.findByPk(id);
        return quote;
    } catch (error) {
        throw error;
    }
};
module.exports = {
    getAllQuotes,
    getQuoteById,
}
