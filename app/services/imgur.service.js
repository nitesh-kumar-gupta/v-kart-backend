'use strict';
const asyncRequest = require('async-request');
const mongoose = require('mongoose');
const Imgur = mongoose.model('Imgur');
const constant = require('./../../configs/constants');
module.exports = class ImgurService {
    constructor() {

    }
    async addAccount(acc) {
        let imgur = await Imgur.findOne({account_id: acc.account_id});
        if(imgur) {
            if(!imgur.active)
                imgur.active = true;
            imgur.account_username = acc.account_username;
            imgur.refresh_token = acc.refresh_token;
            imgur.access_token = acc.access_token;
            imgur.token_type = acc.token_type;
            imgur.expires_in = acc.expires_in;
            imgur.scope = acc.scope;
        } else {
            imgur = new Imgur(acc);
        }
        return await imgur.save();
    }
    async getAccount(id) {
        return Imgur.findOne({account_id: id, active: true}).lean();
    }
    async refreshToken(id) {
        const imgur = await this.getAccount(id);
        let data = {
            client_id: process.env.IMGUR_CLIENT_ID,
            client_secret: process.env.IMGUR_CLIENT_SECRET,
            grant_type: 'refresh_token',
            refresh_token: imgur.refresh_token
        };
        let formData = '';
        Object.keys(data).forEach((key) => {
            formData += `${key}=${encodeURIComponent(data[key])}&`;
        });
        let uri = 'https://api.imgur.com/oauth2/token';
        let response = await asyncRequest(uri, {
            method: 'POST',
            data: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
        let res = JSON.parse(response.body);
        if (res.access_token)
            return await this.addAccount(res);
        throw constant.errors.E_ERROR;
    }
    async uploadImage(data) {
        console.log(':::::::::::::::: ', data);
        return {}
    }
};