const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, 'F6AD1', {
        expiresIn: '30d'
    });

}

module.exports = generateToken;