'use strict';
const imageCloudController = require('./../../controllers/v1/image-cloud.controller');
const isAuthenticated = require('./../../../configs/middlewares/is-authenticated');
const PROTECTED = [
    {type: 'GET', path: '/imagecloud', handlers: [imageCloudController.index]},
    {type: 'GET', path: '/imagecloud/get-auth-link/:type', handlers: [imageCloudController.getAuthLink]},
    {type: 'POST', path: '/authorize/:type', handlers: [isAuthenticated, imageCloudController.authorize]},
    {type: 'POST', path: '/create/:type', handlers: [isAuthenticated, imageCloudController.create]}
];
const PUBLIC = [];
module.exports = {
    PROTECTED,
    PUBLIC
}