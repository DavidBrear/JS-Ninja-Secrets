var assert = require('../ass.js');

function Ninja() {}

Ninja.prototype.swingSword = function() {
	return true;
};

var ninja1 = Ninja();

assert(ninja1 == undefined, 'ninja1 is undefined');

var ninja2 = new Ninja();

assert(ninja2 && ninja2.swingSword &&
	ninja2.swingSword(), "instance created with new");