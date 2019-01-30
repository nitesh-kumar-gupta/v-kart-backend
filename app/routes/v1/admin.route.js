'use strict';
const adminController = require('./../../controllers/v1/admin.controller');
const isAuthenticated = require('./../../../configs/middlewares/is-authenticated');
const isAdmin = require('./../../../configs/middlewares/is-admin');
const PROTECTED = [
    {type: 'GET', path: '/admin', handlers: [adminController.index]},
    {type: 'POST', path: '/admin/addproductcatagory', handlers: [isAuthenticated, isAdmin, adminController.addProductCatagory]}
];
const PUBLIC = [];
module.exports = {
    PROTECTED,
    PUBLIC
}