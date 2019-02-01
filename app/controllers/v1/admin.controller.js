'use strict';
const constants = require('./../../../configs/constants');
const response = require('./../../response');
const ProductCatagoryService = require('./../../services/product-catagory.service');
const ImageService = require('./../../services/image.service');
module.exports = {
    index: (req, res) => {
        return response.success(res, constants.success.OK, {message: "Admin#index"});
    },
    addProductCatagory: async (req, res) => {
        const productCatagoryService = new ProductCatagoryService();
        const productCatagory = productCatagoryService.addProductCatagory();
        return response.success(res, constants.success.CREATED, productCatagory);
    },
    uploadImage: async (req, res) => {
        try {
            const imageService = new ImageService();
            const image = await imageService.uploadImage(req.file);
            return response.success(res, constants.success.CREATED, image);
        } catch(err) {
            console.log('err: err', err);
            return response.error(res, err);
        }
    }
};