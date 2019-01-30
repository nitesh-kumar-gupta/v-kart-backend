'use strict';
const passport = require('passport');
const constants = require('./../../../configs/constants');
const response = require('./../../response');
const UserService = require('./../../services/user.service');
const jwtHelper = require('./../../helpers/jwt.helper');
module.exports = {
    index: (req, res) => {
        return response.success(res, constants.success.OK, {message: "User#index"});
    },
    signup: async (req, res) => {
        try {
            const userService = new UserService();
            const user = await userService.signup(req.body);
            return response.success(res, constants.success.CREATED, {user: user, token: jwtHelper.createToken(user)});
        } catch(err) {
            return response.error(res, err);
        }
    },
    signin: async (req, res) => {
        passport.authenticate('local', { session: false }, (err, user) => {
            try {
                if(err)
                    throw err;
                return response.success(res, constants.success.OK, {user: user, token: jwtHelper.createToken(user)});
            }catch(err) {
                return response.error(res, err);
            }
        })(req, res);
    }
};
