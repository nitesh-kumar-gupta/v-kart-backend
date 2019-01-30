'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
const constants = require('./../../configs/constants');
const response = require('./../../app/response');

module.exports = async (req, res, next) => {
    try {
        if (req.user.role === 'ADMIN')
            return next();
        throw constants.errors.E_UNAUTHORIZED;
    } catch(err) {
        return response.error(res, err);
    }
};