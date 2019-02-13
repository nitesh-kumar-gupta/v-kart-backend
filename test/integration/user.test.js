'use strict';
const baseUrl = '/user';
const User = describe('Auth', () => {
    describe('signup()', () => {
        it('should create new user', (done) => {
            request(app).post(api_url + baseUrl + '/signup')
                .send({
                    "name": "user",
                    "email": "user@gmail.com",
                    "password": "passtheword",
                    "country_code": "+91",
                    "phone": "0000000000"
                })
                .expect('Content-Type', /json/)
                .expect(201)
                .end(function(err, res) {
                    if (err)
                        throw err;
                    assert.isObject(res.body.data);
                    assert.equal(res.body.data.user.name, 'user');
                    assert.equal(res.body.data.user.role, 'USER');
                    assert.equal(res.body.data.user.phone, '0000000000');
                    assert.property(res.body.data, 'token');
                    done();
                });
        });
        it('should fail to create new user if required field(s) is/are missing', (done) => {
            request(app).post(api_url + baseUrl + '/signup')
                .send({
                    "email": "user1@gmail.com",
                    "password": "passtheword",
                    "country_code": "+91",
                    "phone": "0000000001"
                })
                .expect('Content-Type', /json/)
                .expect(400, done);
        });
        it('should not create duplicate user', (done) => {
            request(app).post(api_url + baseUrl + '/signup')
                .send({
                    "name": "user",
                    "email": "user@gmail.com",
                    "password": "passtheword",
                    "country_code": "+91",
                    "phone": "0000000000"
                })
                .expect('Content-Type', /json/)
                .expect(409, done);
        });
    });
});
module.exports = User;