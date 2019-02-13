'use strict';
const mongoose = require('mongoose');
const hashHelper = require('./../helpers/hash.helper');
const constant = require('./../../configs/constants');
const userSchema = mongoose.Schema({
      name: {
          type: String,
          trim: true,
          required: true
      },
      email: {
          type: String,
          trim: true,
          required: true,
          index: {
              unique: true
          }
      },
      password: {
          type: String,
          trim: true,
          required: true
      },
      role: {
          type: String,
          enum: ['ADMIN', 'USER'],
          default: 'USER'
      },
      country_code: {
          type: String,
          trim: true,
          default: '+91'
      },
      phone: {
          type: String,
          trim: true,
          index: {
            unique: true
          },
          required: true
      },
      active: {
          type: Boolean,
          default: false
      },
      verification: {
          complete: {
              type: Boolean,
              default: false
          },
          hash: {
              type: String,
              default: null
          },
          completed_at: {
              type: Date,
              default: null
          }
      }
}, {
    timestamps: true,
    autoIndex: true
});
userSchema.pre('save', function (next) {
    if (this.isModified('password') || this.isNew)
        this.password = hashHelper.generateHash(this.password);
    return next();
});
userSchema.post('save', function(error, doc, next) {
    if(error.name === 'MongoError' && error.code === 11000) {
        if(error.errmsg.indexOf('email') !== -1)
            next(constant.errors.E_DUPLICATE_EMAIL);
        else if(error.errmsg.indexOf('phone') !== -1)
            next(constant.errors.E_DUPLICATE_PHONE);
    } else if(error.name === 'ValidationError') {
        next(constant.errors.E_ERROR);
    } else {
        next(error)
    }
});
userSchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.password;
        delete ret.__v;
        return ret;
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;