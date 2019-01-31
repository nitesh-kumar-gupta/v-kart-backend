'use strict';
const mongoose = require('mongoose');
const ImgurSchema = mongoose.Schema({
    account_username: {
        type: String,
        trim: true,
        require: true
    },
    account_id: {
        type: String,
        trim: true,
        require: true
    },
    refresh_token: {
        type: String,
        trim: true,
        require: true
    },
    access_token: {
        type: String,
        trim: true,
        require: true
    },
    token_type: {
        type: String,
        trim: true,
        require: true
    },
    expires_in: {
        type: Number,
        trim: true,
        require: true
    },
    scope: {
        type: String,
        trim: true,
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
ImgurSchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.__v;
        return ret;
    }
});
const Imgur = mongoose.model('Imgur', ImgurSchema);
module.exports = Imgur;