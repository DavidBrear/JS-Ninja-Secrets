var assert = require('../ass.js');


var v1 = {
	foo: function() {
		return 'foo-v1';
	},
	bar: function() {
		return 'bar-v1';
	}
}
var v2 = {
	foo: function() {
		return 'foo-v2';
	}
}

with (v1) {
	with (v2) {
		// nesting will cause children to override parents.
		assert(foo() === 'foo-v2', 'v2 foo was called');
		assert(bar() === 'bar-v1', 'v1 bar was called');
	}
}