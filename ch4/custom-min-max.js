var assert = require('assert');

function smallest(array) {
	return Math.min.apply(Math, array);
}
function largest(array) {
	return Math.max.apply(Math, array);
}

function small() {
	console.log(arguments);
	return Math.min.apply(Math, arguments);
}

assert(small(4,1,2,10,5,6) == 1, 'small works');

assert(smallest([0,2,1,3]) == 0, "smallest works");
assert(largest([1,2,5,3,1]) == 5, 'largest works!');

console.log('Success!')