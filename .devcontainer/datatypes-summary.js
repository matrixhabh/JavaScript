// Primitive

// 7 Types - String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id == anotherId)

const bigNumber = 345609579463839

// Reference (Non - Primitive)

// Array, Objects, Functions

const villains = ("Darksied", "Raka")

let myObj = {
    name: "Rishabh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log (typeof outsideTemp); // Value = object
console.log (typeof scoreValue); // Value = number
console.log (typeof myFunction); // Value = function