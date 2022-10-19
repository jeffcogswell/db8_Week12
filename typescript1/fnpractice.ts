// Interval Practice 1

/*function printTime() {
	console.log('printTime');
	console.log(new Date());
}
console.log('About to call setInterval');
setInterval(printTime, 5000); // Asynchronous
console.log('Done calling setInterval');*/

// Interval Practice 1 (another way)

/*let printTime2 = () => {
	console.log('printTime2');
	console.log(new Date());
}
setInterval(printTime2, 3000);
*/

// Interval Practice 2

/*setInterval(function(){
	console.log(new Date());
}, 5000);*/

// Interval Practice 2 (another way)

/*setInterval( () => {
	console.log(new Date());
}, 5000);*/

/*console.log('About to call setTimeout');
setTimeout(()=> {
	console.log('Hello');
}, 5000);
console.log('Done calling setTimeout');*/

// forEach Practice 1

/*let names:string[] = ['Fred','Sally','Jack','Susan','Frank', 'Julia'];
console.log('About to call forEach');
names.forEach(

	(name: string) => {
		console.log(`Welcome ${name}!`);
	}

);
console.log('Done calling forEach');*/

let mynums: number[] = [5, 10, 15, 20, 25];
let sum: number = 0;
mynums.forEach(

	(mynum: number) => {
		sum += mynum;
	}

);
console.log(sum);



// Quick API sample (pretend)
/*
function printStuff() {
	console.log('Hello world!');
}
console.log('About to call printStuff');
printStuff();
console.log('Done calling printStuff');
*/

/*

Later when we call an API, our code will resume immediately
with the next line of code before the API finishes!

function doneWithApi(json) {
	console.log(json);
}
console.log('About to call CallSomeApi')
CallSomeApi("www.example.com", doneWithApi);
console.log("Done calling callSomeApi");

*/