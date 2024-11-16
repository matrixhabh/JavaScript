const name = "matrixhabh"
const repoCount = 17

console.log(name + repoCount + " Value");

// Output:

// matrixhabh17 Value 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// to access letter place

const gameName = new String('rishabhhc')

console.log(gameName[0]); // Output:- r
console.log(gameName.__proto__); // Output:- {}

console.log(gameName.length); // Output:- 9
console.log(gameName.toUpperCase()); // Output:- RISHABHHC
console.log(gameName.charAt(2)); // Output:- s
console.log(gameName.indexOf('s')); // Output:- 2

const newString = gameName.substring(0, 4)
console.log(newString);   // Output:- rish

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // Output:- ish

const newStringOne = "   rishabh    "
console.log(newStringOne);
console.log(newStringOne.trim());