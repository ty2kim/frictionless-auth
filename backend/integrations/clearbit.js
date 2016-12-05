var Promise = require('bluebird')
// var clearbit = require('clearbit')(process.env.CLEARBIT_API_KEY)
var clearbit = require('clearbit')("sk_9bf01725057a2b54533f372ec91f46d1")
var Enrichment = clearbit.Enrichment;

var Clearbit = function () {

}

Clearbit.prototype.mapping = function (data) {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

Clearbit.prototype.getDataWithEmail = function(email) {

	return Enrichment.find({email: email, stream: true, cache: false})
		.then((data) => {
			return this.mapping(data)
		})
}


module.exports = function () {
	return new Clearbit()
}
