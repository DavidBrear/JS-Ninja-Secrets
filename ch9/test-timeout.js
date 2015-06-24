var name = 'David';

console.log('setting the timeout');
setTimeout((function(x){
	console.log('in the creation method');
	return function() {
		console.log('when timeout created name was:', x);
		console.log('now the name variable is:', name);
	};

})(name), 2000);

name = 'Steve';