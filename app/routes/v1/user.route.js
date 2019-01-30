'use strict';
const userController = require('./../../controllers/v1/user.controller');
const PROTECTED = [
    {type: 'GET', path: '/user', handlers: [userController.index]},
    {type: 'POST', path: '/user/signup', handlers: [userController.signup]},
    {type: 'POST', path: '/user/signin', handlers: [userController.signin]}
];
const PUBLIC = [];
module.exports = {
    PROTECTED,
    PUBLIC
}