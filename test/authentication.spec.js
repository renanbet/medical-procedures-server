const controller = require('../modules/authentication/controllers/user.controller');
const expect = require('chai').expect;
let time = (new Date()).getTime()
let username = `username-${time} `
let password = 'password'
let role = 'admin'

describe('Authentication add user', () => {
    it('Should add user', async () => {
        let ret = await controller.insert(username, password, role)
        expect(ret).to.be.true;
    });
});

describe('Authentication login user', () => {
    it('Should have user role', async () => {
        let ret = await controller.login(username, password)
        expect(ret.role).equals('admin')
    });
    it('Should have user token', async () => {
        let ret = await controller.login(username, password)
        expect(ret.token).to.be.a('string')
    });
});