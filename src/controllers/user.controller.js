
const UserService = require('../services/user.service');
// const upload = require('../middleware/multer.middleware');

const getAllUser = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        return res.json({
            message: 'Success GET All Users',
            data: users
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
        return res.status(500).json({
            message: 'Error fetching user data.'
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await UserService.getUserById(userId);
        
        if (!user) {
            return res.status(404).json({
                message: 'User not found.'
            });
        }

        return res.json({
            message: 'Success GET User By ID.',
            data: user
            
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
        return res.status(500).json({
            message: 'Error fetching user data.'
        });
    }
};

const updateUserName = async (req, res) => {
    try {
        const userId = req.params.userId;
        const newName = req.body.newName;
        
        const updatedUser = await UserService.updateUserName(userId, newName);

        if (!updatedUser) {
            return res.status(404).json({
                message: 'User not found.'
            });
        }

        return res.json({
            message: 'Username updated successfully.',
            data: updatedUser
        });
    } catch (error) {
        console.error('Error updating username:', error);
        return res.status(500).json({
            message: 'Internal Server Error.'
        });
    }
};

const editPhotoProfile = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Periksa apakah file diunggah oleh klien
        if (!req.file) {
            return res.status(400).json({
                message: 'Invalid file type. Only image files are allowed.'
            });
        }

        // Dapatkan path foto profil baru dari middleware multer
        const newPhotoProfile = req.file.path;

        const updatedUser = await UserService.updatePhotoProfile(userId, newPhotoProfile);

        if (!updatedUser) {
            return res.status(404).json({
                message: 'User not found.'
            });
        }

        return res.json({
            message: 'Photo profile updated successfully.',
            data: {
                id: userId,
                name: updatedUser.name, 
                email: updatedUser.email,
                pathImages: {
                    photoProfile: updatedUser.photoProfile
                }
            }
        });
    } catch (error) {
        console.error('Error updating photo profile:', error);
        return res.status(500).json({
            message: 'Internal Server Error.'
        });
    }
};


module.exports = {
    getAllUser,
    getUserById,
    updateUserName,
    editPhotoProfile,
};
