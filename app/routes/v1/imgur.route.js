'use strict';
const imgurController = require('./../../controllers/v1/imgur.controller');
const isAuthenticated = require('./../../../configs/middlewares/is-authenticated');
const isAdmin = require('./../../../configs/middlewares/is-admin');
const PROTECTED = [
    {type: 'GET', path: '/admin/imgur', handlers: [imgurController.index]},
    {type: 'POST', path: '/admin/imgur/addaccount', handlers: [isAuthenticated, isAdmin, imgurController.addAccount]},
    {type: 'POST', path: '/admin/imgur/upload', handlers: [isAuthenticated, isAdmin, imgurController.uploadImage]}
];
const PUBLIC = [];
module.exports = {
    PROTECTED,
    PUBLIC
}