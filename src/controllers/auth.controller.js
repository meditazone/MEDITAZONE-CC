const AuthService = require('../services/auth.service');
const jwtConfig = require('../config/jwt.config');
const bcryptUtil = require('../utils/bcrypt.util');
const jwtUtil = require('../utils/jwt.util');

const signUp = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: 'Password and confirmation password do not match.'
            });
        }
        const isExist = await AuthService.findUserByEmail(req.body.email);
        if (isExist) {
            return res.status(400).json({
                message: 'Email already exists.'
            });
        }

        const hashedPassword = await bcryptUtil.createHash(req.body.password);

        const userData = {
            name,
            email,
            password: hashedPassword
        };

        const user = await AuthService.createUser(userData);

        return res.status(201).json({
            data: user,
            message: 'User registered successfully.'
        });
    } catch (error) {
        console.error('Error during user registration:', error);
        return res.status(500).json({
            message: 'Internal Server Error.'
        });
    }
};

const signIn = async (req, res) => {
    try {
        const user = await AuthService.findUserByEmail(req.body.email);
        if (user) {
            const isMatched = await bcryptUtil.compareHash(req.body.password, user.password);
            if (isMatched) {
                const userData = { id: user.id, name: user.name, email: user.email };
                const token = await jwtUtil.createToken({ userData });

                return res.status(200).json({
                    message: 'Login successfully.',
                    access_token: token,
                    token_type: 'Bearer',
                    expires_in: jwtConfig.ttl
                })
            }
        }
    } catch (error) {
        return res.status(400).json({ message: 'Unauthorized.' }); 
    }
};

const getUser = async (req, res) => {
    try {
        const user = await AuthService.findUserById(req.user.id);
        
        return res.json({
            data: user,
            message: 'Success.'
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
        return res.status(500).json({
            message: 'Error fetching user data.'
        });
    }
};

const logOut = async (req, res) => {    
    await AuthService.logoutUser(req.token, req.user.exp);  
    return res.json({ message: 'Logged out successfully.' });
}

module.exports = {
    signUp,
    signIn,
    getUser,
    logOut,
}