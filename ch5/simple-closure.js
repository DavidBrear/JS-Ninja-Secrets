var assert = require('assert');

var outerValue = 'ninja';

function outerFunction() {
	assert(outerValue == 'ninja', 'cannot see outer value');
}

outerFunction();

console.log('success!');