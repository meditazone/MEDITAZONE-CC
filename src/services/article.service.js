const articleModel = require('../models/article.model');

const getAllArticle = async () => {
    try {
        const articles = await articleModel.findAll({
            order: [['article_id', 'ASC']], 
        });
        return articles;
    } catch (error) {
        throw error;
    }
};

const getArticleById = async (id) => {
    try {
        const article = await articleModel.findByPk(id);
        return article;
    } catch (error) {
        throw error;
    }
};

const getArticleByCategory = async (category) => {
    try {
        const article = await articleModel.findAll({
            where: {
                category: category,
            },
        });
        return article;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllArticle,
    getArticleById,
    getArticleByCategory,
}