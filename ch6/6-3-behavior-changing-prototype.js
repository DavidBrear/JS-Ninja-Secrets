var assert = require('../ass.js');

function Ninja() {
	this.swung = true;
}

var ninja = new Ninja();

assert(ninja.swingSword == undefined, "the method does not exist at this calling.");

// define a method on the Ninja object after creating an instance
// of the object.
Ninja.prototype.swingSword = function() {
	return this.swung;
};

assert(ninja.swingSword(), "Method exists, even out of order.");