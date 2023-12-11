const meditationModel = require('../models/meditation.model');

const getAllMeditation = async () => {
    try {
        const meditation = await meditationModel.findAll();
        return meditation;
    } catch (error) {
        throw error;
    }
};

const getMeditationById = async (id) => {
    try {
        const meditation = await meditationModel.findByPk(id);
        return meditation;
    } catch (error) {
        throw error;
    }
};

const getMeditationsByCategory = async (category) => {
    try {
        const meditation = await meditationModel.findAll({
            where: {
                category: category,
            },
        });
        return meditation;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllMeditation,
    getMeditationById,
    getMeditationsByCategory
};
