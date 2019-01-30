'use strict';
const AddressService = require('./../../services/address.service');
const constants = require('./../../../configs/constants');
const response = require('./../../response');
module.exports = {
    index: (req, res) => {
        return response.success(res, constants.success.OK, {message: "Address#index"});
    },
    addNewAddress: async (req, res) => {
        try {
            const addressService = new AddressService();
            const address = await addressService.addNewAddress(req.body, req.user);
            return response.success(res, constants.success.CREATED, address);
        } catch(err) {
            return response.error(res, err);
        }
    },
    getAddress: async (req, res) => {
        try {
            const addressService = new AddressService();
            const address = await addressService.getAddress(req.params.id, req.user);
            return response.success(res, constants.success.OK, address);
        } catch(err) {
            return response.error(res, err);
        }
    },
    setAddress: async (req, res) => {
        try {
            const addressService = new AddressService();
            const address = await addressService.setAddress(req.params.id, req.body, req.user);
            return response.success(res, constants.success.OK, address);
        } catch(err) {
            return response.error(res, err);
        }
    },
    deleteAddress: async (req, res) => {
        try {
            const addressService = new AddressService();
            const address = await addressService.deleteAddress(req.params.id, req.user);
            return response.success(res, constants.success.OK, address);
        } catch(err) {
            return response.error(res, err);
        }
    }
};
