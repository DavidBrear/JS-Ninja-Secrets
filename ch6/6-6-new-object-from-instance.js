var assert = require('../ass.js');

function Ninja(){}

var ninja1 = new Ninja();

var ninja2 = new ninja1.constructor();

assert(ninja2 instanceof Ninja, "ninja2 is from the Ninja object");
assert(ninja1 !== ninja2, "ninja1 and ninja2 are different objects");