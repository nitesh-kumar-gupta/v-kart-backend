'use strict';
const categoryController = require('./../../controllers/v1/category.controller');
const isAuthenticated = require('./../../../configs/middlewares/is-authenticated');
const isAdmin = require('./../../../configs/middlewares/is-admin');
const PROTECTED = [
    {type: 'GET', path: '/category', handlers: [categoryController.index]},
    {type: 'POST', path: '/category/add', handlers: [isAuthenticated, isAdmin, categoryController.addProductCatagory]},
    {type: 'GET', path: '/category/:id', handlers: [categoryController.getCategory]}
];
const PUBLIC = [];
module.exports = {
    PROTECTED,
    PUBLIC
}