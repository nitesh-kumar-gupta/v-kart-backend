'use strict';
module.exports = class ImageService {
    constructor() {

    }
    async uploadImage(file) {
        return {path: file.path};
    }
};