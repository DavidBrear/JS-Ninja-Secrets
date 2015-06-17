var assert = require('../ass.js');

function Ninja(){}

var ninja = new Ninja();

assert(typeof ninja == "object", 'The type of ninja is an object');

assert(ninja instanceof Ninja,
	"instanceof identifies the constructor");

assert(ninja.constructor == Ninja,
	"the ninja object was created by the Ninja function");