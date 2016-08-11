var CONFIG = require('./config');
var API    = require('../index');
var api    = API(CONFIG.APP_ID, CONFIG.APP_SECERT);
describe("Coupons", function () {
	it("can be getted from server", function (done) {
		api.getValidCoupons().then(function (data) {
			expect(data.response.coupons).toBeTruthy();
			done(data);
		}, function (err) {
			done.fail(err);
		});
	});
});
