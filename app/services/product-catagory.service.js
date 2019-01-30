'use strict';
const mongoose = require('mongoose');
const ProductCatagory = mongoose.model('ProductCatagory');
const constant = require('./../../configs/constants');
module.exports = class ProductCatagoryService {
    constructor() {

    }
    addProductCatagory() {
        return {'addProductCatagory': 'addProductCatagory'};
    }
};