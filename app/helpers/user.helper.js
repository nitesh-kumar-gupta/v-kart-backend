'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
const emailHelper = require('./email.helper');
const constant = require('./../../configs/constants');
const userHelper = {
    async resetPassword(email) {
        if (!emailHelper.validateEmail(email))
            throw constant.errors.E_INVALID_EMAIL;
        const user = await User.findOne({email: email}).lean();
        if (user)
            return user;
        throw constant.errors.E_USER_NOT_FOUND;
    },
    async getUser(id) {
        const user = await User.findById(id).lean();
        if (user)
            return user;
        throw constant.errors.E_USER_NOT_FOUND;
    }
};
module.exports = userHelper;