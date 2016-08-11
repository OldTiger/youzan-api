var CONFIG = require('./config');
var API    = require('../index');
var api    = API(CONFIG.APP_ID, CONFIG.APP_SECERT);

describe("Coupons", function () {
	it("can be getted from server", function (done) {
		api.getValidCoupons().then(function (data) {
			expect(data.response.coupons).toBeTruthy();
			// done.fail(JSON.stringify(data));
			done();
		}, function (err) {
			done.fail(err);
		});
	});
	it("can be getted by code", function (done) {
		var code = '053033540721';
		api.getCoupon(code).then(function (data) {
			expect(data.response.coupon).toBeTruthy();
			done();
		}, function (err) {
			done.fail(err);
		})
	});
	it('verify logs can be getted', function (done) {
		api.getCouponVerifyLogs().then(function (data) {
			expect(data.response.verifylogs).toBeTruthy();
			done();
		}, function (err) {
			done.fail(err);
		});
	});
	it('can be presented to wechat fans', function (done) {
		var openid  = 'oov-0w9ya_S_XK3yMjEHWFUCSRi4';
		var groupid = '1395185';

		api.presentCoupon(openid, groupid).then(function (data) {
			done();
		}, function (err) {
			done.fail(err);
		});
	});
	it('can be verfied', function(done){
		var couponid = '053033540721';
		api.verfyCoupon(couponid).then(function(data){
			expect(data.response.is_success).toBeTruthy();
			done();
		}, function(err){
			done.fail(err);
		})
	});
});
