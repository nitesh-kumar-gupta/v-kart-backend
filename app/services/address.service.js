'use strict';
const mongoose = require('mongoose');
const Address = mongoose.model('Address');
const constant = require('./../../configs/constants');
module.exports = class AddressService {
    constructor() {

    }
    async addNewAddress(address, user) {
        let defaultAddress = await Address.findOne({default_address: true});
        if(address.default_address && defaultAddress) {
            defaultAddress.default_address = false;
            await defaultAddress.save();
        } else if(!address.default_address && !defaultAddress)
            address.default_address = true;
        const newAddress = new Address(address);
        newAddress.user = user.id;
        return await newAddress.save();
    }
    async getAddress(id, user) {
        let address = null;
        if(id.toLowerCase() === 'all')
            address = await Address.find({user: user.id, deleted: false}).lean();
        else
            if (mongoose.Types.ObjectId.isValid(id))
                address = await Address.findOne({_id: id, user: user.id, deleted: false}).lean();
        return address || {};
    }
    async setAddress(id, data, user) {
        if (mongoose.Types.ObjectId.isValid(id))
            return await Address.findOneAndUpdate({_id: id, deleted: false}, {$set: data}, {new: true});
        throw constant.errors.E_ERROR;
    }
    async deleteAddress(id, user) {
        if (mongoose.Types.ObjectId.isValid(id))
            return await Address.findOneAndUpdate({_id: id, user: user.id}, {$set: {deleted: true}}, {new: true});
        throw constant.errors.E_ERROR;
    }
};