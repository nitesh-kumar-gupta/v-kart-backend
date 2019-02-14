'use strict';
const mongoose = require('mongoose');
const ImageSchema = mongoose.Schema({
    originalname: {
        type: String,
        default: ''
    },
    filename: {
        type: String,
        default: ''
    },
    path: {
        type: String,
        default: ''
    },
    mimetype: {
        type: String,
        default: ''
    },
    size: {
        type: Number,
        default: 0
    },
    encoding: {
        type: String,
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
ImageSchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.deleted;
        delete ret.__v;
        return ret;
    }
});
const Image = mongoose.model('Image', ImageSchema);
module.exports = Image;