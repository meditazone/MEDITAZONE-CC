const express = require('express');
const router = express.Router();


const UserController = require('../controllers/user.controller');
const upload = require('../middleware/multer.middleware');

router.get('/profile/allUsers', UserController.getAllUser);
router.get('/profile/:userId', UserController.getUserById);
router.put('/updateName/:userId/', UserController.updateUserName);
router.put('/editPhotoProfile/:userId/', upload.single('photo'), UserController.editPhotoProfile);


router.all('*',  (req, res) => res.status(400).json({ message: 'Bad Request.'}))

module.exports = router;