'use strict';
const mongoose = require('mongoose');
const ImageCloud = mongoose.model('ImageCloud');
const request = require('request-promise');
const fs = require('fs');
module.exports = class  {
    constructor() {
    }
    getAuthLink() {
        return 'https://api.imgur.com/oauth2/authorize?client_id=da79431e16ac878&response_type=token';
    }
    async create(data) {
        let imageCloud = await ImageCloud.findOne({account_username: data.account_username, type: 'IMGUR'});
        if(!imageCloud) {
            imageCloud = new ImageCloud(data);
            imageCloud.type = 'IMGUR';
        } else {
            imageCloud.active = true;
            imageCloud.access_token = data.access_token;
            imageCloud.refresh_token = data.refresh_token;
            imageCloud.token_type = data.token_type;
        }
        return await imageCloud.save();
    }
    async uploadImage(file, cloudId) {
        let imageCloud = await ImageCloud.findById(cloudId).lean();
        let { path, type, size } = file;
        let image = await fs.createReadStream(path);
        let uri = 'https://api.imgur.com/3/image';
        let options = {
            method: 'POST',
            uri: uri,
            headers: {
                'Authorization': `Bearer ${imageCloud.access_token}`
            },
            formData: {
                image: {
                    value: image,
                    options: {
                        filename: path
                    }
                }
            }
        };
        let response = await request(options);
        return JSON.parse(response).data;
    }
};