'use strict';
const addressController = require('./../../controllers/v1/address.controller');
const isAuthenticated = require('./../../../configs/middlewares/is-authenticated');
const PROTECTED = [
    {type: 'GET', path: '/address', handlers: [addressController.index]},
    {type: 'POST', path: '/address/add', handlers: [isAuthenticated, addressController.addNewAddress]},
    {type: 'GET', path: '/address/:id', handlers: [isAuthenticated, addressController.getAddress]},
    {type: 'PUT', path: '/address/:id', handlers: [isAuthenticated, addressController.setAddress]},
    {type: 'DELETE', path: '/address/:id', handlers: [isAuthenticated, addressController.deleteAddress]}
];
const PUBLIC = [];
module.exports = {
    PROTECTED,
    PUBLIC
}