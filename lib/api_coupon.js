/**
 * 获取所有未结束的优惠券
 * @param {array} fields(可选) - eg ['group_id','coupon_type']不传参数返回所有字段,{@link http://open.youzan.com/apidetail?method=kdt.ump.coupons.unfinished.all&apiId=6805|fields字段详情}.
 * @returns {promise}
 */
function getValidCoupons(fields) {
	if (fields && Object.prototype.toString.call(fields) !== '[objec Array]') {
		throw new Error('getValidCoupons function param fields should be array, eg ["attribute1","attribute2"]');
	}
	if(fields) {
		return this._SDK.get('kdt.ump.coupons.unfinished.all', fields.join(','));
	}
	return this._SDK.get('kdt.ump.coupons.unfinished.all');
}

module.exports.getValidCoupons = getValidCoupons;