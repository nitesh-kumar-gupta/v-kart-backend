'use strict';
const adminController = require('./../../controllers/v1/admin.controller');
const isAuthenticated = require('./../../../configs/middlewares/is-authenticated');
const multer = require('./../../../configs/middlewares/multer');
const isAdmin = require('./../../../configs/middlewares/is-admin');
const PROTECTED = [
    {type: 'GET', path: '/admin', handlers: [adminController.index]},
    {type: 'POST', path: '/admin/upload/image/:type/:cloudId', handlers: [multer.single('image'), adminController.uploadImage]}
];
const PUBLIC = [];
module.exports = {
    PROTECTED,
    PUBLIC
}