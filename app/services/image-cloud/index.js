const mongoose = require('mongoose');
const ImageCloud = mongoose.model('ImageCloud');
const ImgurService = require('./imgur.service');
module.exports = class ImageCloudService {
    constructor() {}
    getInstance(type) {
        let instance = null;
        switch (type.toLowerCase()) {
            case 'imgur':
                instance = new ImgurService();
            break;
        }
        return instance;
    }
    async getAllImageCloud() {
        console.log('asdasdasdas');
        let imageCloud = await ImageCloud.find({}, {account_username: 1, active: 1, type: 1}).lean();
        return imageCloud || [];
    }
};