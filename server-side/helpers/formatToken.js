const generateToken = require('./generateToken');

function formatToken(user) {
    const { username, id, role } = user

    let result = {
        id,
        username,
        role, 
        accessToken: generateToken(user)
    };
    return result;
};

module.exports = formatToken;