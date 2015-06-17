var assert = require('../ass.js');

var outerValue = 'ninja';
var later;

function outerFunction() {
	var innerValue = 'samurai';

	function innerFunction(paramValue) {
		assert(outerValue, "inner function can see outer value");
		assert(innerValue, 'inner function can see inner value');
		assert(paramValue, 'inner function can see paramValue');
		assert(tooLate, 'inner function can see tooLate');
	}

	later = innerFunction;
}

assert(!tooLate, 'outer cannot see too late');
var tooLate = 'ronin';

outerFunction();
later('wakizashi');

console.log('Success!')