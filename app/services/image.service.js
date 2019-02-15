'use strict';
const mongoose = require('mongoose');
const Image = mongoose.model('Image');
module.exports = class ImageService {
    constructor() {

    }
    async uploadImage(file) {
        const image = new Image(file);
        return await image.save();
    }
};