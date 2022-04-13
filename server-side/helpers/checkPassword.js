const bcrypt = require('bcrypt');

function checkPassword(password, encryptPassword) {
    const passwordCheck = bcrypt.compareSync(password, encryptPassword);

    return passwordCheck;
};

module.exports = checkPassword;