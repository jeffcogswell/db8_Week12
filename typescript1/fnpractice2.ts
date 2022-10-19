
// Let's create a function that makes a cup of coffee.

function MakeCup(brand) {
	return `One cup of ${brand}`;
}

let cup1 = MakeCup('Starbucks');   // I called the function and got back a string 'One cup of Starbucks' and I saved that string in a variable called cup1
console.log(cup1);

console.log(MakeCup('Folgers'));   // I called the function and got back a string 'One cup of Folgers' and I sent that result to console.log



function sendCoffeeMaker(machine) {
	let cup = machine("Peets");
	console.log(cup);
}

sendCoffeeMaker(MakeCup);


