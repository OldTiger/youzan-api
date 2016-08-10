var CONFIG = require('./config');
var API = require('../index')(CONFIG.APP_ID, CONFIG.APP_SECERT);

describe("Youzan coupons", function() {
	it("can be getted from server", function() {
		expect(true).toBe(true);
	});
});