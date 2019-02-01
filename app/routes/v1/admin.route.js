'use strict';
const adminController = require('./../../controllers/v1/admin.controller');
const isAuthenticated = require('./../../../configs/middlewares/is-authenticated');
const multer = require('./../../../configs/middlewares/multer');
const isAdmin = require('./../../../configs/middlewares/is-admin');
const PROTECTED = [
    {type: 'GET', path: '/admin', handlers: [adminController.index]},
    {type: 'POST', path: '/admin/addproductcatagory', handlers: [isAuthenticated, isAdmin, adminController.addProductCatagory]},
    {type: 'POST', path: '/admin/upload/image', handlers: [isAuthenticated, isAdmin, multer.single('image'), adminController.uploadImage]}
];
const PUBLIC = [];
module.exports = {
    PROTECTED,
    PUBLIC
}