var assert = require('../ass.js');

Function.prototype.partial = function() {
	var fn = this,
	args = Array.prototype.slice.call(arguments);
	return function() {
		return fn.apply(this,args.concat(
			Array.prototype.slice.call(arguments)));
	};
};

String.prototype.csv = String.prototype.split.partial(/,\s*/);

var results = ('Mugan, Jin, Fuu').csv();

assert(results[0] == 'Mugan', 'first was mugan');
assert(results[1] == 'Jin', 'second was jin');
assert(results[2] == 'Fuu', 'third was fuu');