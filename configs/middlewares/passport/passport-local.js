'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');
const LocalStrategy = require('passport-local').Strategy;
const hashHelper = require('./../../../app/helpers/hash.helper');
const constant = require('./../../constants');
const LOCAL_STRATEGY_CONFIG = {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
};
const _onLocalStrategyAuth = async (req, username, password, next) => {
    try {
        username = username.toLowerCase();
        let user = await User.findOne({ $or: [{ email: username }, { phone: username }] });
        if (!user)
            throw constant.errors.E_INVALID_CREDENTIALS;
        else if (!user.active)
            throw constant.errors.E_ACCOUNT_DISABLED;
        else if(!isValidPassword(user, password))
            throw constant.errors.E_INVALID_CREDENTIALS;
        return next(false, user);
    } catch (err) {
        return next(err, false);
    }
};
const isValidPassword = (user, password) => {
    return hashHelper.compare(password, user.password);
};
const localStrategy = new LocalStrategy(LOCAL_STRATEGY_CONFIG, _onLocalStrategyAuth);
module.exports = {
    strategy: localStrategy
};
