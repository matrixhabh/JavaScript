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
console.log(hundreds.toLocaleString());

// output:- 1,000,000