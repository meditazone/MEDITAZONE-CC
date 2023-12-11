const articleService = require('../services/article.service');

const getAllArticle = async (req, res) => {
    try {
        const article = await articleService.getAllArticle();
        
        return res.json({
            message: 'Success GET All Article.',
            data: article,
        });
    } catch (error) {
        console.error('Error fetching quotes:', error);
        return res.status(500).json({
            message: 'Error fetching quotes.',
        });
    }
};

const getArticleById = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await articleService.getArticleById(id);

        if (!article) {
            return res.status(404).json({
                message: 'Article not found.',
            });
        }

        return res.json({
            message: 'Success GET Article By ID.',
            data: article,
        });
    } catch (error) {
        console.error('Error fetching quote by ID:', error);
        return res.status(500).json({
            message: 'Error fetching quote by ID.',
        });
    }
};

module.exports = {
    getAllArticle,
    getArticleById,
}