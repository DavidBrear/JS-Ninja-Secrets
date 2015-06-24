var assert = require('../ass.js');

var ninja = eval("({name: 'Ninja'})");

assert(ninja != undefined, 'the ninja is not undefined');
assert(ninja.name === 'Ninja', 'was created with right name');

var fn = eval("(function(){ return 'Ninja';})");

assert(typeof fn === 'function', 'function was created successfully');

assert(fn() === 'Ninja', 'function returned Ninja');

var ninja2 = eval("{name: 'Ninja'}");

assert(ninja2 != undefined, 'ninja2 was created');

assert(ninja2 === 'Ninja', "but was just set to the last value");