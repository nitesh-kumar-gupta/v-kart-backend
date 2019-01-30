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

// IMGUR_CLIENT_ID = 'da79431e16ac878'
// IMGUR_CLIENT_SECRET = 'aba08ad48fc7dc505fedfcb7c48accdf300f094a'
// ff1095201f7f6bebed754bed6a326770375492c5
// d0b765d706279dc5815f58de7c723974d7dea971