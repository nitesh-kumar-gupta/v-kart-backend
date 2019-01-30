'use strict';
const mongoose = require('mongoose');
const MetaDataSchema = new mongoose.Schema(
    {
        key: {
            type: String,
            default: null
        },
        value: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true,
        autoIndex: true
    }
);
module.exports = MetaDataSchema;
