var assert = require('../ass.js');

function Ninja() {
	this.swung = true;
	this.swingSword = function() {
		return this.swung;
	};
}

var ninja = new Ninja();

Ninja.prototype.swingSword = function() {
	console.log('called the prototyped method');
	return !this.swung;
};

assert(ninja.swingSword(), "called the instance method, not the prototyped method.");