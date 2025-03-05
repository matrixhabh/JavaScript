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
    // console.log("INNER: ", x); // INNER: 20
}

console.log(x); // 10

// This is use of global and local scope

function one(){
    const username = "Rishabh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one() // Note that after two() gets interpreted one() gets interpreted and two() gets interpreted once again.

// Output- Rishabh
// Trick :- smaller can grab from bigger but bigger can't from smaller

if (true) {
    const username = "Rishu"
    if (username === "Rishu") {
        const website = " youtube"
        // console.log(username + website); // Output:- Rishu + youtube
    }
    // console.log(website); // bcz the scope of inner if ends
}
// console.log(username); // same


// ***************** Interesting *************************


// Writing functions by two ways 

console.log(addone(5))

function addone (num){
    return num + 1
}

// Output:- 6

console.log(addtwo(5))

const addtwo = function(num) {
    return num + 2
}

// Output:- Cannot access 'addtwo' before initialization
// This is called hoisting problem.