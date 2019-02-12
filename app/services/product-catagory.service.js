'use strict';
const mongoose = require('mongoose');
const ProductCatagory = mongoose.model('ProductCatagory');
module.exports = class ProductCatagoryService {
    constructor() {

    }
    async addProductCatagory(category) {
        const productCatagory = new ProductCatagory(category);
        return await productCatagory.save();
    }
    async getCategory(id) {
        let category = null;
        if(id.toLowerCase() === 'all')
            category = await ProductCatagory.find({deleted: false}).populate('parent_product_catagory', 'name').lean();
        else
            if (mongoose.Types.ObjectId.isValid(id))
            category = await Address.findOne({_id: id, deleted: false}).lean();
        return category || {};
    }
};