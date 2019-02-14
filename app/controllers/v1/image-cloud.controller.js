'use strict';
const ImageCloudService = require('./../../services/image-cloud');
const constants = require('./../../../configs/constants');
const response = require('./../../response');
module.exports = {
    index: (req, res) => {
        return response.success(res, constants.success.OK, {message: "imagecloud#index"});
    },
    getAuthLink: async (req, res) => {
        try {
            let instance = new ImageCloudService().getInstance(req.params.type);
            let authlink = await instance.getAuthLink();
            return response.success(res, constants.success.OK, authlink);
        } catch(err) {
            return response.error(res, err);
        }
    },
    authorize: async (req, res) => {
        try {
            return response.success(res, constants.success.OK, {});
        } catch(err) {
            return response.error(res, err);
        }
    },
    create: async (req, res) => {
        try {
            let instance = new ImageCloudService().getInstance(req.params.type);
            let imageCloud = await instance.create(req.body);
            console.log('imageCloud: ', imageCloud);
            return response.success(res, constants.success.CREATED, imageCloud);
        } catch(err) {
            return response.error(res, err);
        }
    }
};
