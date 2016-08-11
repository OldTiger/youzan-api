/**
 * 获取所有未结束的优惠券
 * @param {array} fields(可选) - eg ['group_id','coupon_type']不传参数返回所有字段,
 * @see {@link http://open.youzan.com/apidetail?method=kdt.ump.coupons.unfinished.all&apiId=6805|fields字段详情}.
 * @returns {promise}
 * @example <caption>promise resovle result</caption>
 {
  "response": {
    "coupons": [
      {
        "group_id": "1057649",
        "coupon_type": "PROMOCARD",
        "range_type": "ALL",
        "title": "hai",
        "value": "20.00",
        "is_random": 0,
        "value_random_to": "0.00",
        "need_user_level": 0,
        "user_level_name": "",
        "quota": 0,
        "is_at_least": 0,
        "at_least": "0.00",
        "total": 11111,
        "stock": 11107,
        "start_at": "2016-03-22 16:03:05",
        "end_at": "2016-04-28 16:02:48",
        "expire_notice": 0,
        "description": "",
        "is_forbid_preference": 0,
        "is_sync_weixin": 0,
        "status": 0,
        "is_share": 1,
        "fetch_url": "https://wap.koudaitong.com/v2/ump/promocard/fetch?alias=mmf5piz0",
        "stat_fetch_user_num": 3,
        "stat_fetch_num": 4,
        "stat_use_num": 3,
        "created": "2016-03-22 16:03:10"
      }
    ]
  }
}
 */
function getValidCoupons(fields) {
	if (fields && Object.prototype.toString.call(fields) !== '[objec Array]') {
		throw new Error('getValidCoupons function param fields should be array, eg ["attribute1","attribute2"]');
	}
	if (fields) {
		return this._SDK.get('kdt.ump.coupons.unfinished.all', fields.join(','));
	}
	return this._SDK.get('kdt.ump.coupons.unfinished.all');
}

/**
 * 根据核销码获取优惠券/优惠码
 * @see {@link http://open.youzan.com/apidetail?method=kdt.ump.coupon.consume.get&apiId=6818|有赞官方说明}
 * @param {string} code - eg '812903470923'
 * @returns {promise}
 * @example <caption>promise resovle result</caption>
 * {
  "response": {
    "code": "939134343442",
    "status": 0,
    "consume_at": "",
    "consume_id": "",
    "coupon": {
      "group_id": "1045269",
      "coupon_type": "PROMOCODE",
      "range_type": "ALL",
      "title": "10元优惠码",
      "value": "10.00",
      "is_random": 0,
      "value_random_to": "0.00",
      "need_user_level": 0,
      "user_level_name": "",
      "quota": 10,
      "is_at_least": 1,
      "at_least": "10.10",
      "total": 100,
      "stock": 94,
      "start_at": "2016-03-17 13:24:28",
      "end_at": "2016-04-30 13:24:28",
      "expire_notice": 0,
      "description": "",
      "is_forbid_preference": 0,
      "is_sync_weixin": 0,
      "status": 0,
      "is_share": 0,
      "fetch_url": "",
      "stat_fetch_user_num": 0,
      "stat_fetch_num": 0,
      "stat_use_num": 0,
      "created": "2016-03-17 13:25:26"
    }
  }
}
 */
function getCoupon(code) {
	if (!code) {
		throw new Error('getCoupon code param needed');
	}
	return this._SDK.get('kdt.ump.coupon.consume.get', {
		code: code
	});
}

/**
 * 核销优惠券/优惠码
 * @param {string} code - eg'812903470923'
 * @return {promise}
 * @see {@link http://open.youzan.com/apidetail?method=kdt.ump.coupon.consume.verify&apiId=6819|官方API}
 * @example <caption>promise resolve result</caption>
 {
   "response": {
	 "is_success": true
   }
 }
 */
function verfyCoupon(code) {
	return this._SDK.post('kdt.ump.coupon.consume.verify', {
		code: code
	});
}

/**
 * 微信粉丝领取优惠券优惠码 WTK 有赞对微信openid处理了,要先去向有赞服务器去获取处理后的openid
 * @param {String}openID
 * @param {Number}couponGroupID
 * @see {@link http://open.youzan.com/apidetail?method=kdt.ump.coupon.take&apiId=7059|youzan}
 * @example <caption>promise resolve result</caption>
 {
  "response": {
    "coupon_type": "PROMOCARD",
    "promocard": {
      "promocard_id": "10422654",
      "title": "华宇测试0722",
      "value": "1.00",
      "condition": "无限制",
      "start_at": "2016-07-22 17:35:03",
      "end_at": "2016-07-30 17:34:23",
      "is_used": "0",
      "is_invalid": "0",
      "is_expired": 0,
      "background_color": "#55bd47",
      "detail_url": "https://wap.koudaitong.com/v2/showcase/coupon/detail?alias=1359928&id=10422654",
      "verify_code": "792873936041"
    }
  }
}
 */
function presentCoupon(openID, couponGroupID) {
	if (openID) {
		return this._SDK.post('kdt.ump.coupon.take', {
			weixin_openid  : openID,
			coupon_group_id: parseInt(couponGroupID)
		});
	}
}

module.exports.getValidCoupons = getValidCoupons;

/**
 * 获取优惠券/优惠码核销记录
 * @param {String}type
 * @param {Number}pageSize
 * @param {Number}pageNo
 * @return {promise}
 * @see {@link http://open.youzan.com/apidetail?method=kdt.ump.coupon.consume.verifylogs.get&apiId=7003|youzan}
 * @example <caption> promise resolve result
 {
  "response": {
    "verifylogs": [
      {
        "id": "16587",
        "group_id": "1083627",
        "title": "quake测试",
        "value": "1.00",
        "condition": "0.00",
        "verify_code": "278757543822",
        "admin_nickname": "赵彬辉",
        "created_at": "2016-04-06 15:31:24"
      }
    ],
    "total_results": "26"
  }
}
 */
function getCouponVerifyLogs(type, pageSize, pageNo) {
	var param     = {};
	var paramFlag = false;

	if (type) {
		param.type = type;
		paramFlag  = true;
	}
	if (pageSize) {
		param.page_size = pageSize;
		paramFlag       = true;
	}
	if (pageNo) {
		param.page_no = pageNo;
		paramFlag     = true;
	}
	if (!paramFlag)
		return this._SDK.get('kdt.ump.coupon.consume.verifylogs.get');
	else
		return this._SDK.get('kdt.ump.coupon.consume.verifylogs.get', param);
}

module.exports.getCoupon           = getCoupon;
module.exports.getCouponVerifyLogs = getCouponVerifyLogs;
module.exports.verfyCoupon         = verfyCoupon;
module.exports.presentCoupon       = presentCoupon;