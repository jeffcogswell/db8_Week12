function callit(somefunction) {
	console.log('====Got it! Ready to call it!====');
	somefunction();
}


function sample1() {
	console.log('Hello world, I am sample1!');
}

function sample2() {
	console.log('Leave me alone please!');
	console.log("I'm trying to code here!");
}

function sample3() {
	console.log('I like to add. 1 + 1 = 2');
}

callit(sample2);
callit(sample1);
callit(sample3);

callit(
	function() {
		console.log('I am an anonymous function!');
	}
);

// APIs will work like this:
//    callSomeAPI('https://www.example.com', sample1)