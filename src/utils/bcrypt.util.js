const bcrypt = require('bcrypt');

const compareHash = (plainPassword, hashedPassword) => bcrypt.compare(plainPassword, hashedPassword);

const createHash = (plainPassword) => bcrypt.hash(plainPassword, 10);

module.exports = {
    compareHash,
    createHash,
}