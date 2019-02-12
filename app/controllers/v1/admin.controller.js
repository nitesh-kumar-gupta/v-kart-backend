'use strict';
const constants = require('./../../../configs/constants');
const response = require('./../../response');
const ImageService = require('./../../services/image.service');
module.exports = {
    index: (req, res) => {
        return response.success(res, constants.success.OK, {message: "Admin#index"});
    },
    uploadImage: async (req, res) => {
        try {
            const imageService = new ImageService();
            const image = await imageService.uploadImage(req.file);
            return response.success(res, constants.success.CREATED, image);
        } catch(err) {
            console.log('err: err', err);
            return response.error(res, err);
        }
    }
};