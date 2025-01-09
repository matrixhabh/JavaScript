// Used to compress long work into small by using features like call by reference or values etc

// Example-

function saymyname() {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("H");
}

// saymyname // this is reference
// saymyname() // this is its execution


// Parameters and Arguments (Nomenclature)


function addTwonumbers(number1, number2) { // these are parameters (inside the braces)
    console.log(number1 + number2);
}

// Case-
addTwonumbers(3, "4") // the values given inside are called as arguments (when they've been called)
// 34

// Problem-
addTwonumbers(3, "a") 
// 3a 
// because we haven't decided what are the datatypes of the given values

addTwonumbers(3, null)
// 3

// Another Case-

function addTwonumbers(number1, number2) {
    let result = number1 + number2
    return result
    console.log("Rishabh");
}

// Output- 
// Result: 9 (notice how the console doesn't gets printed)

function addTwonumbers(number1, number2) {
    let result = number1 + number2
    console.log("Rishabh");
    return result
}

// Output-
// Rishabh
Result: 9

// Another way to write this-
function addTwonumbers(number1, number2) {
    // let result = number1 + number2
    // console.log("Rishabh");
    return number1 + number2
}

const result = addTwonumbers(4, 5)

// console.log("Result: ", result);

// Output- 
// 9
// Result: undefined (here the datatype of the given value is unknown)

// function loginUserMessage(username){
    // return `${username} just logged in`
// }

// loginUserMessage("Rishabh") // This is just the reference

// console.log(loginUserMessage("Rishabh"))
// Rishabh just logged in

// Now if the username isn't given-

// console.log(loginUserMessage());
// undefined just logged in (not null but undefined)

// Important basic case-

function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} has logged in`
}

console.log(loginUserMessage());

// If we want to avoid the default if value here 
// we can just give (username = 'kratos') {i.e., defining a value}

// Output-
// Please enter a username
// undefined

// Note these-

// if (undefined) or if ("") are some examples of false values
// if (!) ( here ! mark turns true to false and false to true)
// instead of writing (username === undefined) we can just write (!username)