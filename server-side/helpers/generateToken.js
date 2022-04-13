const jwt = require('jsonwebtoken');

function generateToken(user) {
    let dataUser = {
        id: user.id,
        username: user.username,
        role: user.role
    }

    let secretOrPrivateKey = 'Rahasia cuyy, kalo dipublish bisa death!'
    let token = jwt.sign(dataUser, secretOrPrivateKey)
    return token;
};

module.exports = generateToken;