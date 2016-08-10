var CONFIG = require('./config');
var API    = require('../index');

describe('API', function () {
	it('can be constructed and used as an object', function () {
		var api = API(CONFIG.APP_ID, CONFIG.APP_SECERT);
		expect(api.appID).toBe(CONFIG.APP_ID);
	});
	it('throws error if params are not defined', function () {
		expect(API).toThrowError('ID or secret can not be empty');
	});
});