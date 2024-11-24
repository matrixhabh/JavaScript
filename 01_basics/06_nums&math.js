const score = 400
console.log(score);
// Output:- 400

const balance = new Number(100)
console.log(balance);
// Output:- [Number: 100]

console.log(balance.toString().length); // Output:- 3
console.log(balance.toFixed(2)); // Outout:- 100.00
console.log(balance.toFixed(1)); // Output:- 100.0

const otherNumber = 23.6996

console.log(otherNumber.toPrecision(3));
// Output:- 23.7 (does sthe round-off)

// if
// const otherNumber1 = 123.6996
// console.log(otherNumber1.toPrecision(3));
// then 
// output:- 124

// also if 
// const otherNumber2 = 1124.6996
// console.log(otherNumber2.toPrecision(3));
// then
// output:- 1.12e+3

const otherNumber3 = 123.6996
console.log(otherNumber3.toPrecision(4));

// output:- 123.7

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // Output is in US standard

// output:- 1,000,000

console.log(hundreds.toLocaleString('en-IN')); // Output is in Indian standard

// Output:- 10,00,000

// ********************** MATHS **************************

console.log(Math);
// output:- Object [Math] {}

console.log(Math.abs(-4)); // 4
// here positive stays in positive but negative turns into positive ;)

// To roundoff-
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8
console.log(Math.random()*10 + 1); // generates a random decimal no.
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min) // Output:- 12.01293300525704

// Output:- Random integers