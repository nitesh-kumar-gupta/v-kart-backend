'use strict';
const mongoose = require('mongoose');
const ImageCloudSchema = mongoose.Schema({
    access_token: {
        type: String,
        trim: true,
        required: true
    },
    refresh_token: {
        type: String,
        trim: true,
        required: true
    },
    token_type: {
        type: String,
        trim: true,
        default: ''
    },
    account_username: {
        type: String,
        trim: true,
        default: ''
    },
    type: {
        type: String,
        enum: [null, 'IMGUR'],
        default: null
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    autoIndex: true
});
ImageCloudSchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.__v;
        return ret;
    }
});
const ImageCloud = mongoose.model('ImageCloud', ImageCloudSchema);
module.exports = ImageCloud;