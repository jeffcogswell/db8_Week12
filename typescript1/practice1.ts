console.log('hello world!');

function Add(x: number, y: number): number {
	return x + y;
}

let Add2 = function(x:number, y:number):number {
	return x + y;
}

let Multiply = (x: number, y: number): number => {
	return x * y;
}

console.log(Multiply(6, 5));

// When you ONLY have on line in the function and it's a return statement,
// you can leave off the curlies and the word return:

let Mult2 = (x: number, y: number): number => x * y;

console.log(Mult2(10,20));

// Let's set up an interval. It will run a function every three seconds.

let Hello = () => {
	console.log('Hello!');
};

Hello();

// I'm going to call a function called setInterval. I'm going to hand over
// to it two things:
//     1. A function to call, in this Hello
//     2. A number of milliseconds of how long to wait between calls
// setInterval will then call that function every so-many milliseconds.
// Let's do the Hello function every 3000 milliseconds (that's 3 seconds)
// To "hand over things" to a function, we pass them as parameters.
// Don't put parentheses after Hello. Leaving them off means we're handing
// over the function itself (as opposed to the results of the function).

//setInterval(Hello, 3000);

setInterval(
	() => {
		console.log('Hello!!!');
	}, 3000
);
// This concept transcends all of JavaScript (including TypeScript) development.


