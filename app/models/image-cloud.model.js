// name?: string;
//     isConfigured?: boolean;
//     small_logo: string;
//     large_logo: string;
//     displayName: string;
//     auth_type: string;
//     isActive: boolean;


// 'use strict';
// const mongoose = require('mongoose');
// const constant = require('./../../configs/constants');
// const ImageCloudSchema = mongoose.Schema({
//     name: {
//         type: String,
//         trim: true,
//         require: true
//     },
//     isActive: {
//         type: Boolean,
//         default: true
//     },
//     icon: {
//         type: String,
//         trim: true,
//         default: ''
//     },
//     deleted: {
//         type: Boolean,
//         default: false
//     }
// }, {
//     timestamps: true,
//     autoIndex: true
// });
// ProductCatagorySchema.post('save', function(error, doc, next) {
//     if(error.name === 'MongoError' && error.code === 11000) {
//         if(error.errmsg.indexOf('name') !== -1)
//             next(constant.errors.E_DUPLICATE_EMAIL);
//     } else {
//         next(error)
//     }
// });
// ProductCatagorySchema.set('toJSON', {
//     getters: true, virtuals: false, transform: (doc, ret, options) => {
//         delete ret.deleted;
//         delete ret.__v;
//         return ret;
//     }
// });
// const ProductCatagory = mongoose.model('ProductCatagory', ProductCatagorySchema);
// module.exports = ProductCatagory;