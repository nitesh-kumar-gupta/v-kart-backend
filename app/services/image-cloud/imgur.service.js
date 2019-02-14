
'use strict';
const mongoose = require('mongoose');
const constant = require('./../../../configs/constants');
const ImageCloud = mongoose.model('ImageCloud');
module.exports = class  {
    constructor() {
    }
    getAuthLink() {
        return 'https://api.imgur.com/oauth2/authorize?client_id=da79431e16ac878&response_type=token';
    }
    async create(data) {
        let imageCloud = new ImageCloud(data);
        imageCloud.type = 'IMGUR';
        return await imageCloud.save();
    }
};