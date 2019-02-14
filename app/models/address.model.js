'use strict';
const mongoose = require('mongoose');
const addressSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    pincode: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    state: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    city: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    address: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    address_type: {
        type: {
            type: String,
            enum: ['Home', 'Office'],
            default: 'Home'
        },
        Open_sat: {
            type: Boolean,
            default: false
        },
        Open_sun: {
            type: Boolean,
            default: false
        }
    },
    default_address: {
        type: Boolean,
        default: false
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    autoIndex: true
});
addressSchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.deleted;
        delete ret.__v;
        return ret;
    }
});
const Address = mongoose.model('Address', addressSchema);
module.exports = Address;