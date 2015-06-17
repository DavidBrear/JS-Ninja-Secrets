var assert = require('../ass.js');

function Person(){}
Person.prototype.dance = function(){}

function Ninja(){}

Ninja.prototype = { dance: Person.prototype.dance };

var ninja = new Ninja();

assert(ninja instanceof Ninja,
	"Ninja recieves functionality from the Ninja prototype");

assert(ninja instanceof Person, "ninja inherits from Person");
assert(ninja instanceof Object, "ninja inherits from Object");