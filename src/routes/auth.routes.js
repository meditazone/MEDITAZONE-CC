const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth.controller.js');
const ErrorHandler = require('../middleware/error.middleware.js');
const AuthGuard = require('../middleware/auth.middleware.js');
const schema = require('../validations/auth.validation.js');
const validate = require('../utils/validator.util.js'); 

router.post('/signup', validate(schema.register), ErrorHandler(AuthController.signUp));
router.post('/signin',    validate(schema.login),    ErrorHandler(AuthController.signIn));
router.get('/user',      AuthGuard,                 ErrorHandler(AuthController.getUser));
// router.get('/user/:id',      AuthGuard,                 ErrorHandler(AuthController.getUser));
router.get('/logout',    AuthGuard,                 ErrorHandler(AuthController.logOut));

router.all('*',  (req, res) => res.status(400).json({ message: 'Bad Request.'}))

module.exports = router;