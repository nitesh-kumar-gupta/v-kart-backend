'use strict';
const constants = require('./../../../configs/constants');
const response = require('./../../response');
const ImageCloudService = require('./../../services/image-cloud');
module.exports = {
    index: (req, res) => {
        return response.success(res, constants.success.OK, {message: "Admin#index"});
    },
    uploadImage: async (req, res) => {
        try {
            let instance = new ImageCloudService().getInstance(req.params.type);
            let image = await instance.uploadImage(req.file, req.params.cloudId);
            return response.success(res, constants.success.CREATED, image);
        } catch(err) {
            console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
            console.log(err);
            console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
            return response.error(res, err);
        }
    }
};