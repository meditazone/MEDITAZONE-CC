const meditationService = require('../services/meditation.service');

const getAllMeditationController = async (req, res) => {
    try {
        const meditation = await meditationService.getAllMeditation();

        return res.json({
            message: 'Success GET All Meditation',
            data: meditation,
        })
    } catch (error) {
        console.error('Error fetching meditation:', error);
        return res.status(500).json({
            message: 'Error fetching meditation.',
        });
    }
};

const getMeditationByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const meditation = await meditationService.getMeditationById(id);

        if (!meditation) {
            return res.status(400).json({
                message: 'Meditation not found.'
            });
        }

        return res.json({
            message: 'Success GET Meditation By ID',
            data: meditation,
        });
    } catch (error) {
        console.error('Error Fetching Meditation By ID:', error);
        return res.status(500).json({
            message: 'Error Fetching Meditation By ID'
        });
    }
};

const getMeditationsByCategoryController = async (req, res) => {
    try {
        const { category } = req.params;
        const meditation = await meditationService.getMeditationsByCategory(category);

        if (!meditation) {
            return res.status(404).json({
                message: 'Meditation not found.'
            });
        }

        return res.json({
            message: 'Success GET Meditation by Category',
            data: meditation,
        });
    } catch (error) {
        console.error('Error fetching meditation by Category:', error);
        return res.status(500).json({
            message: 'Error fetching meditation by Category'
        });
    }
};

module.exports = {
    getAllMeditationController,
    getMeditationByIdController,
    getMeditationsByCategoryController
}