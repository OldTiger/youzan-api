var SDK = require('youzan-sdk');

function API(appID, appSecret) {
	if (!appID || !appSecret) {
		throw new Error('ID or secret can not be empty');
	}
	if (!(this instanceof API)) {
		return new API(appID, appSecret);
	}

	this.appID     = appID;
	this.appSecret = appSecret;
	this._SDK      = SDK({
		key   : appID,
		secret: appSecret
	});
}

API.mixin = function (obj) {
	for (var key in obj) {
		if (API.prototype.hasOwnProperty(key)) {
			throw new Error('Don\'t allow override existed prototype method: ' + key);
		}
		API.prototype[key] = obj[key];
	}
};

module.exports = API;