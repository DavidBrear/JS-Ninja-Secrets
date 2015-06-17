var assert = require('../ass.js');

var outerValue = 'ninja';

var later;

function outerFunction() {
	var innerValue = 'samurai';

	function innerFunction() {
		assert(outerValue, 'can see the outer value');
		assert(innerValue, 'can see the inner value');
	}
	later = innerFunction;
}

outerFunction();

later();