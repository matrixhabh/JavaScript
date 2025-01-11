// var c = 300 // This is global scope

if (true) {
    let a = 10
    const b = 20
    var c = 30 // or even (c = 30) // This is local scope
}

// console.log(a); // Reference a is not defined (context is in if statement)
// console.log(b); // Reference b is not defined same
console.log(c); // 30

// The importance to avoid using var {Scope context}

// Case-

let x = 10

if (true) {
    let x = 20
    console.log("INNER: ", x); // INNER: 20
}

console.log(x); // 10

// This is use of global and local scope