var assert = require('../ass.js');

function Ninja() {
	var feints = 0;
	this.getFeints = function() {
		return feints;
	};
	this.feint = function() {
		feints++;
	};
}
var ninja = new Ninja();

ninja.feint();

assert(ninja.getFeints() == 1, 'we got the number of feints');
assert(ninja.feints == undefined, 'we cannot see the private variable');