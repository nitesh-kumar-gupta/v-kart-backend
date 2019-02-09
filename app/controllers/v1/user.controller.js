'use strict';
const passport = require('passport');
const constants = require('./../../../configs/constants');
const response = require('./../../response');
const UserService = require('./../../services/user.service');
const jwtHelper = require('./../../helpers/jwt.helper');
const userHelper = require('./../../helpers/user.helper');
module.exports = {
    index: async (req, res) => {
        try {
            const user = await userHelper.getUser(req.user.id);
            return response.success(res, constants.success.OK, user);
        } catch(err) {
            return response.error(res, err);
        }
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
                return response.success(res, constants.success.OK, {token: jwtHelper.createToken(user)});
            }catch(err) {
                return response.error(res, err);
            }
        })(req, res);
    },
    resetPassword: async(req, res) => {
        try {
            const user = await userHelper.resetPassword(req.body.email);
            return response.success(res, constants.success.OK, user);
        } catch(err) {
            return response.error(res, err);
        }
    }
};
