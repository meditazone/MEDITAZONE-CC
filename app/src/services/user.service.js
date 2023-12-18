const UserModel = require('../models/user.model');

const getAllUsers = async () => {
    return UserModel.findAll();
};

const getUserById = async (userId) => {
    return UserModel.findByPk(userId);
};

const updateUserName = async (userId, newName) => {
    const user = await UserModel.findByPk(userId);

    if (!user) {
        return null;
    }

    user.name = newName;
    await user.save();

    return user;
};

const updatePhotoProfile = async (userId, newPhotoProfile) => {
    const user = await UserModel.findByPk(userId);

    if (!user) {
        return null;
    }

    user.photoProfile = newPhotoProfile;
    await user.save();

    return user;
};
const deleteUser = async (userId) => {
    const user = await UserModel.findByPk(userId);

    if (!user) {
        return null;
    }

    await user.destroy();
    return user;
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUserName,
    updatePhotoProfile,
    deleteUser,
};
