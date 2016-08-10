const SDK    = require('youzan-sdk');
const CONFIG = require('./config');

const sdk = SDK({
	key   : CONFIG.APP_ID,
	secret: CONFIG.APP_SECERT
});

/*sdk.get('kdt.items.onsale.get', {
	page_size: 20
}).then(function (data) {
	console.log(JSON.stringify(data));
});*/
sdk.get('kdt.ump.coupons.unfinished.all',{
	fields: 'group_id'
}).then(function(data) {
	// make some thing
	console.log(JSON.stringify(data));
},function(err){
	console.log(err);
});