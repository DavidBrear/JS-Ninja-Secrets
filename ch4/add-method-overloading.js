var assert = require('assert');

function addMethod(object, name, fn) {
	var old = object[name];
	object[name] = function() {
		if (fn.length == arguments.length)
			return fn.apply(this, arguments);
		else if (typeof old == 'function')
			return old.apply(this, arguments);
	};
}

var ninjas = {
	values: ["David Brear", "Kelly Bryant", "Bill Gates"]
};

addMethod(ninjas, 'find', function() {
	return this.values;
});
addMethod(ninjas, 'find', function(name) {
	var ret = [];
	for (var i = 0; i < this.values.length; i++) {
		if (this.values[i].indexOf(name) == 0)
			ret.push(this.values[i]);
	}
	return ret;
});

addMethod(ninjas, 'find', function(first, last) {
	var ret = [];
	for (var i = 0; i < this.values.length; i++) {
		if (this.values[i] == first + ' ' + last)
			ret.push(this.values[i]);
	}
	return ret;
})


assert(ninjas.find().length == 3, 'blank find should be 3');
assert(ninjas.find("David").length == 1, 'david should be found once');

assert(ninjas.find('Kelly', 'Bryant').length == 1, 'kelly bryant should be found once');

console.log('Success!');