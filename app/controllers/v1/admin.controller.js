'use strict';
const constants = require('./../../../configs/constants');
const response = require('./../../response');
const ProductCatagoryService = require('./../../services/product-catagory.service');
module.exports = {
    index: (req, res) => {
        return response.success(res, constants.success.OK, {message: "Admin#index"});
    },
    addProductCatagory: async (req, res) => {
        const productCatagoryService = new ProductCatagoryService();
        const productCatagory = productCatagoryService.addProductCatagory();
        return response.success(res, constants.success.CREATED, productCatagory);
    }
};
