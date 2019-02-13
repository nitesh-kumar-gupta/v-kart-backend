global.request = require('supertest');
global.chai = require('chai');
global.assert = chai.assert;
global.app = require('./../app');
global.api_url = '/api/v1';
const seed = require('./../configs/seed');
seed.dropAllCollections();
require('./integration/user.test');