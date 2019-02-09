'use strict';
const isAuthenticated = require('./../../../configs/middlewares/is-authenticated');
const userController = require('./../../controllers/v1/user.controller');
const PROTECTED = [
    {type: 'GET', path: '/user', handlers: [isAuthenticated, userController.index]},
    {type: 'POST', path: '/user/signup', handlers: [userController.signup]},
    {type: 'POST', path: '/user/signin', handlers: [userController.signin]},
    {type: 'POST', path: '/user/password/reset', handlers: [userController.resetPassword]}
];
const PUBLIC = [];
module.exports = {
    PROTECTED,
    PUBLIC
}