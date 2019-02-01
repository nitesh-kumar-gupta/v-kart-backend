'use strict';
const mongoose = require('mongoose');
const Image = mongoose.model('Image');
const constant = require('./../../configs/constants');
module.exports = class ImageService {
    constructor() {

    }
    async uploadImage(file) {
        const image = new Image(file);
        return await image.save();
    }
};