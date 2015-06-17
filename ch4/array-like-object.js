var assert = require('assert');

var testArr = ['one', 'two', 'three', 'four', 'five'];

var elems = {
	length: 0,
	add: function(elem) {
		Array.prototype.push.call(this, elem);
	},
	gather: function(idx) {
		this.add(testArr[idx]);
	}
};

elems.gather(2);
assert(elems.length == 1, "We added an element to the stash");

elems.gather(0);
assert(elems.length == 2, "added another element");

console.log(elems);

console.log('Success!');