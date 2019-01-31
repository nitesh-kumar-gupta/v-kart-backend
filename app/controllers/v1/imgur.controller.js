'use strict';
const constants = require('./../../../configs/constants');
const response = require('./../../response');
const ImgurService = require('./../../services/imgur.service');
module.exports = {
    index: (req, res) => {
        return response.success(res, constants.success.OK, {message: "imgur#index"});
    },
    addAccount: async (req, res) => {
        const imgurService = new ImgurService();
        const imgurAcc = await imgurService.addAccount(req.body);
        return response.success(res, constants.success.CREATED, imgurAcc);
    },
    uploadImage: async (req, res) => {
        const imgurService = new ImgurService();
        const image = await imgurService.uploadImage(req.body);
        return response.success(res, constants.success.CREATED, image);
    }
};