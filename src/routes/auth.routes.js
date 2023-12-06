const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth.controller.js');
const ErrorHandler = require('../middleware/error.middleware.js');
const AuthGuard = require('../middleware/auth.middleware.js');
const schema = require('../validations/auth.validation.js');
const validate = require('../utils/validator.util.js'); 

router.post('/register', validate(schema.register), ErrorHandler(AuthController.register));
router.post('/login',    validate(schema.login),    ErrorHandler(AuthController.login));
router.get('/user',      AuthGuard,                 ErrorHandler(AuthController.getUser));
router.get('/logout',    AuthGuard,                 ErrorHandler(AuthController.logout));

router.all('*',  (req, res) => res.status(400).json({ message: 'Bad Request.'}))

module.exports = router;