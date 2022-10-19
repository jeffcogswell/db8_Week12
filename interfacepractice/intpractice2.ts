interface Car {
	make: string;
	model: string;
	year: number
};

let car1: Car = {
	make: 'Ford',
	model: 'Mustang',
	year: 1965
};

let car2: Car = {
	make: 'Chevy',
	model: 'Trax',
	year: 2018
};

let car3: Car = {
	make: 'Honda',
	model: 'Civic LX',
	year: 2002
};

console.log(car1);
console.log(car2);
console.log(car3);

//car3.year = 'Hello'; // Typescript stops me from doing this, even though it's "valid" in JavaScript

// Let's make an array of these
// First without a type, e.g. JavaScript style

let thing = {
	make: 1000,
	model: 'Hello',
	size: 50
};

let stuff = [car1, car2, car3, thing];
console.log(stuff);

let cars: Car[] = [car1, car2, car3, thing];
console.log(cars);

// An interface is a shape (or cookie cutter or mold, etc) of an object.
// When declare a variable of having it as a type, TypeScript will stop
// us from putting the wrong members in it. If we use it for an array
// TypeScript will stop us from putting an object in the array that
// doesn't fit the mold.

