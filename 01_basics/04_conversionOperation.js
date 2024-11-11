let score = 99;

console.log(typeof score);
console.log(typeof(score));

// Output :-

// number
// number

// ex-

let score2 = "99";

console.log(typeof score2);
// or (both are same) 
console.log(typeof(score2));

// ex:-

// string
// string

// Now :

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// Output-

// number

// But what if-

let score3 = "99xyz";
let valueInNumber2 = Number(score3);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// Output-

// number 
// NaN ;)


// When-

let score4 = null
let valueInNumber3 = Number(score4);
console.log(typeof score4);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

// Output -

// object 
// number 
// 0

// Also when-

let score5 = undefined
let valueInNumber4 = Number(score5);
console.log(typeof score5);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

// Output- 

// undefined
// number 
// NaN

// One more-

let score6 = true
let valueInNumber5 = Number(score6);
console.log(typeof score6);
console.log(typeof valueInNumber5);
console.log(valueInNumber5);

// Output-

// boolean 
// number 
// 1 ( will be 0 if considered false)


// Now to check -

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// Output-

// true 

// if -

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2);

// Output-

// false

// if -

let isLoggedIn3 = "Rishabh"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3);

// Output-

// true