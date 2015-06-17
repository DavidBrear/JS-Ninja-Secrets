var assert = require('assert');


// call(subject, arg1, arg2, ...) <- n+1 args
// apply(subject, [arg1, arg2, ...]) <- 2 args
function multiMax(multiple) {
	return multiple * Math.max.apply(Math, Array.prototype.slice.call(arguments, 1));
}

assert(multiMax(3, 1, 2, 3) == 9, "multiMax works!");

console.log("Success!");