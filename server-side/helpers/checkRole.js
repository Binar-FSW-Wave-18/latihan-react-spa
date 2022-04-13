const { Usergame } = require('../models');

function checkRole(role, roleCheck) {
    const whatRole = Usergame.findOne({ where: {
        role,
        roleCheck
    }});
    return whatRole;
};

module.exports = checkRole;