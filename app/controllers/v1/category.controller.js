'use strict';
const constants = require('./../../../configs/constants');
const response = require('./../../response');
const ProductCatagoryService = require('./../../services/product-catagory.service');
module.exports = {
    index: (req, res) => {
        return response.success(res, constants.success.OK, {message: "Category#index"});
    },
    addProductCatagory: async (req, res) => {
        try {
            const productCatagoryService = new ProductCatagoryService();
            const productCatagory = await productCatagoryService.addProductCatagory(req.body);
            return response.success(res, constants.success.CREATED, productCatagory);
        } catch(err) {
            return response.error(res, err);
        }
    },
    getCategory: async (req, res) => {
        try {
            const productCatagoryService = new ProductCatagoryService();
            const category = await productCatagoryService.getCategory(req.params.id);
            return response.success(res, constants.success.OK, category);
        } catch(err) {
            console.log('err: ', err);
            return response.error(res, err);
        }
    }
};