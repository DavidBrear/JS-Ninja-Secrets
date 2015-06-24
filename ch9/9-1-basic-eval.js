var assert = require('../ass.js');

assert(eval("5+5") === 10, "5 + 5 = 10");

assert(eval("var ninja=5;") === undefined, 'no value was returned');

assert(ninja === 5, 'ninja was created and set to 5');

(function() {
	eval('var ninja = 6;');
	assert(ninja === 6, 'evaluated within the current scope');
})();

assert(ninja === 5, 'global scope still unaffected');

// this won't work because no parentheses
var o = eval('{offer: 1}');

assert(o === 1, 'o is the last value passed back');

// this will work
o = eval('({offer: 1})');
assert(o && o.offer === 1, "o was set correctly");