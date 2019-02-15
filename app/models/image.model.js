'use strict';
const mongoose = require('mongoose');
const ImageSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        default: ''
    },
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        trim: true,
        default: ''
    },
    size: {
        type: Number,
        default: 0
    },
    account_id: {
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
ImageSchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.deleted;
        delete ret.__v;
        return ret;
    }
});
const Image = mongoose.model('Image', ImageSchema);
module.exports = Image;