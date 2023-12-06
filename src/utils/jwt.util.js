const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

const verifyToken = (token) => jwt.verify(token, jwtConfig.secret);

const createToken = (data) => jwt.sign(data, jwtConfig.secret, { expiresIn: jwtConfig.ttl });

// exports.verifyToken = (token) => jwt.verify(token, jwtConfig.secret);

// exports.createToken = (data) => jwt.sign(data, jwtConfig.secret, { expiresIn: jwtConfig.ttl });

module.exports ={
    verifyToken,
    createToken,
}