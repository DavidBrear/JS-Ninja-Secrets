var assert = require('../ass.js');

function Ninja() {
	this.swung = false;

	this.swingSword = function() {
		return !this.swung;
	};
}

Ninja.prototype.swingSword = function() {
	return this.swing;
};

var ninja = new Ninja();

assert(ninja.swingSword(), 'Called the instance method, not the prototype method.');
