function getAllUnfinished(fields) {
	if (fields && Object.prototype.toString.call(fields) !== '[objec Array]') {
		throw new Error('getAllUnfinished function param fields should be array, eg ["attribute1","attribute2"]');
	} else {
		return this._SDK.get('kdt.ump.coupons.unfinished.all', fields.join(','));
	}
	return this._SDK.get('kdt.ump.coupons.unfinished.all');
}

module.exports.getAllUnfinished = getAllUnfinished;