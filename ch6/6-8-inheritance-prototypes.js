var assert = require('../ass.js');

function Person(){}

Person.prototype.dance = function() {};

function Ninja() {}

Ninja.prototype = new Person();

var ninja = new Ninja();

assert(ninja instanceof Ninja,
	"ninja is an instance of Ninja");
assert(ninja instanceof Person,
	"ninja is an instance of Person");
assert(ninja instanceof Object,
	"ninja is an instance of Object");

assert(typeof ninja.dance == 'function',
	'ninja dance is a function');