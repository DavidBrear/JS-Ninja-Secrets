var assert = require('../ass.js');

var ninjaMethods = {
	foo: function() {
		return 'NINJA';
	},
	lower: function(word) {
		return word.toLowerCase();
	}
}

with(ninjaMethods) assert(lower(foo()) === 'ninja', 'with returns the right casing');

(function(m){
	assert(m.lower(m.foo()) === 'ninja', "immediate function returns the right casing");
})(ninjaMethods);