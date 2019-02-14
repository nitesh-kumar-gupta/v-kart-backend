const mongoose = require('mongoose');
const ImgurService = require('./imgur.service');
module.exports = class ImageCloudService {
    constructor() {}
    getInstance(type) {
        let instance = null;
        switch (type) {
            case 'imgur':
                instance = new ImgurService();
            break;
        }
        return instance;
    }
};