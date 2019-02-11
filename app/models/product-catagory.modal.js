'use strict';
const mongoose = require('mongoose');
const ProductCatagorySchema = mongoose.Schema({
    parent_product_catagory: [{
        type: mongoose.Schema.ObjectId,
        ref: 'ProductCatagory',
        default: null
    }],
    name: {
        type: String,
        trim: true,
        require: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    icon: {
        type: String,
        trim: true,
        default: ''
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    autoIndex: true
});
ProductCatagorySchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.deleted;
        delete ret.__v;
        return ret;
    }
});
const ProductCatagory = mongoose.model('ProductCatagory', ProductCatagorySchema);
module.exports = ProductCatagory;