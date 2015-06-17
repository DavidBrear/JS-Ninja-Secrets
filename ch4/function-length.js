var assert = require('assert');

function makeNinja(name){}
function makeSamurai(name, rank){}

function makeTest(name, rank, age) {
	console.log(makeTest.length);
	console.log(arguments.length);
}

// length of function == # of params

assert(makeNinja.length == 1, 'only expecting 1 argument');
assert(makeSamurai.length == 2, 'only expecting 2 arguments');

makeTest(1,2,3);

console.log('Success!');