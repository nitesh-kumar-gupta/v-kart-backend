'use strict';
const mongoose = require('mongoose');
const constant = require('./../../configs/constants');
const ProductCatagorySchema = mongoose.Schema({
    parent_product_catagory: [{
        type: mongoose.Schema.ObjectId,
        ref: 'ProductCatagory',
        default: null
    }],
    name: {
        type: String,
        trim: true,
        unique: true,
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
ProductCatagorySchema.post('save', function(error, doc, next) {
    if(error.name === 'MongoError' && error.code === 11000) {
        if(error.errmsg.indexOf('name') !== -1)
            next(constant.errors.E_DUPLICATE_EMAIL);
    } else {
        next(error)
    }
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