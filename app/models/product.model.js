'use strict';
const mongoose = require('mongoose');
const MetaData = require('./schemas/meta-data.schema');
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true,
        default: ''
    },
    description: {
        type: String,
        trim: true,
        require: true,
        default: ''
    },
    product_catagory: [{
        type: mongoose.Schema.ObjectId,
        ref: 'ProductCatagory'
    }],
    images: [
        {
            type: String,
            trim: true,
            default: ''
        }
    ],
    price: {
        type: Number,
        require: true,
        default: 0
    },
    discount: {
        type: {
            type: String,
            enum: ['Flat', 'Percentage'],
            default: 'Percentage'
        },
        value: {
            type: Number,
            require: true,
            default: 0
        },
        name: {
            type: String,
            trim: true,
            default: ''
        }
    },
    quantity: {
        type: Number,
        require: true,
        default: 0
    },
    meta_data: [MetaData],
    deleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    autoIndex: true
});
ProductSchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.deleted;
        delete ret.__v;
        return ret;
    }
});
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;