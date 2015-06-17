'use strict'

var assert = require('assert');

var store = {
	nextId: 1,
	cache: {},
	add: function(fn) {
		if (!fn.id) {
			fn.id = store.nextId++;
			return !!(store.cache[fn.id] = fn);
		}
	}
};

function ninja() {}

assert(store.add(ninja), "function was added");
assert(!store.add(ninja), 'was only added once');
