'use strict';
const jwt = require('jsonwebtoken');
const jwtConfig = require('./../../configs/middlewares/passport/jwt').config;
const jwtHelper = {
    createToken(user) {
        return jwt.sign({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        },
        jwtConfig.secret,
        {
            algorithm: jwtConfig.algorithm,
            expiresIn: jwtConfig.expiresIn,
            issuer: jwtConfig.issuer,
            audience: jwtConfig.audience
        }
    );
    }
};
module.exports = jwtHelper;
