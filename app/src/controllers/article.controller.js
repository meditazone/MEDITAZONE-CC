const articleService = require('../services/article.service');

const getAllArticle = async (req, res) => {
    try {
        const article = await articleService.getAllArticle();
        
        return res.status(200).json({
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

        return res.status(200).json({
            message: 'Success GET Article By ID.',
            data: article,
        });
    } catch (error) {
        console.error('Error fetching article by ID:', error);
        return res.status(500).json({
            message: 'Error fetching article by ID.',
        });
    }
};

const getArticleByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const article = await articleService.getArticleByCategory(category);

        if (!article) {
            return res.status(404).json({
                message: 'Meditation not found.'
            });
        }

        return res.json({
            message: 'Success GET Meditation by Category',
            data: article,
        });
    } catch (error) {
        console.error('Error fetching meditation by Category:', error);
        return res.status(500).json({
            message: 'Error fetching meditation by Category'
        });
    }
};


module.exports = {
    getAllArticle,
    getArticleById,
    getArticleByCategory,
}