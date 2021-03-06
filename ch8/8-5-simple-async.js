(function() {
	var queue = [], paused = false;

	this.test = function(fn) {
		queue.push(fn);
		runTest();
	};

	this.pause = function() {
		paused = true;
	};

	this.resume = function() {
		paused = false;
		setTimeout(runTest, 1);
	};

	function runTest() {
		if (!paused && queue.length) {
			queue.shift()();
			if(!paused) resume();
		}
	}
})();