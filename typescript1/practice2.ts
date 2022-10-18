let nums: number[] = [5,6,10,3,2];

// Loop version 1: for loop
console.log('Regular for loop');
for (let index:number=0; index < nums.length; index++) {
	console.log(nums[index] * 2);
}

// Loop version 2: forEach with separate function
console.log('forEach version 1');

let f1 = (p: number) => { // Callback function
	console.log(p * 2);
};

nums.forEach(f1);

// Loop version 3: forEach with function inside the forEach statement

console.log('forEach version 2');
// We're passing the function in directly
nums.forEach(

	(p: number) => { // Callback function
		console.log(p * 3);
	}

);

// Loop version 4: for-of
console.log('for-of version');
for (let num of nums) {
	console.log(num * 4);
}
