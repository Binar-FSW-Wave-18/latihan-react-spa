const passport = require('passport');

const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const { Usergame } = require('../models');

const options = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),

    secretOrKey: 'Rahasia cuyy, kalo dipublish bisa death!',
}

passport.use(new JwtStrategy(options, async(payload, done) => {
    try {
        const user = await Usergame.findByPk(payload.id);

        return done(null, user);
    }catch(err) {
        return done(err, false);
    };
}));

module.exports = passport;