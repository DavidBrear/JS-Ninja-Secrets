var assert = require('assert');

module.exports = function(val, message) {
	try {
		assert(val);
		console.log("Success!", message);
	} catch (ex) {
		console.log('Error on', message);
	}
}