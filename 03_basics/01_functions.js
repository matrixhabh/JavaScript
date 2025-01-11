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

// console.log(loginUserMessage());

// If we want to avoid the default if value here 
// we can just give (username = 'kratos') {i.e., defining a value}

// Output-
// Please enter a username
// undefined

// Note these-

// if (undefined) or if ("") are some examples of false values
// if (!) ( here ! mark turns true to false and false to true)
// instead of writing (username === undefined) we can just write (!username)

// Functions with objects and arrays -

function calculateCartPrice(num1) {
    return num1
}

console.log(calculateCartPrice(2));

// Output -
// 2

// Another case- (passing a lot of values)

function calculateCartPrice(num1) {
    return num1
}

console.log(calculateCartPrice(200, 300, 400));

// Output-
// 200 (first item)


// Now comes the concept of Rest Operator / Spread Operator


function calculateCartPrice(...num1) { //(here the 3 dots are known as rest/spread operators)
    return num1
}

console.log(calculateCartPrice(400, 800, 900, 3000, 5000));

// Output- 
// [ 400, 800, 900, 3000, 5000 ] (An array created bcz of the operator helps to show all the listed prices)

// Another case-

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 600 ,800));

// Output-
// [ 600, 800 ] ( val1-> 200, val2-> 400, the rest gets printed )

 const user = {
    username: "Rishabh",
    price: 199
 }

 function handleObject(anyobject){
    console.log(`The username is ${anyobject.username} and price is ${anyobject.price}`);
 }

 handleObject(user)

//  Output-
// The username is Rishabh and price is 199


// Note that-
// variable name is very imp i.e.,

// const user = {
//     username: "Rishabh",
//     prices: 199
//  }

//  function handleObject(anyobject){
//     console.log(`The username is ${anyobject.username} and price is ${anyobject.price}`);
//  }

//  handleObject(user)

// Then the output will be-
// The username is Rishabh and price is undefined (bcz of name convention)


// Another way to pass the function-

const user2 = {
    username: "Rishabh",
    price: 199
 }

 function handleObject(anyobject){
    console.log(`The username is ${anyobject.username} and price is ${anyobject.price}`);
 }

//  handleObject(user2)
handleObject({
    username: "PS",
    price: 399
})

// Output-
// The username is PS and price is 399

const myNewArray = [200, 400, 600, 800]

function passSecondValue(getarray){
    return getarray[1]
}

console.log(passSecondValue(myNewArray));

// Output-
// 400

// Still arrays can also be passed similarly like objects (directly or by variable)-

const myNewArray1 = [200, 400, 600, 800]

function passSecondValue(getarray){
    return getarray[1]
}

console.log(passSecondValue([400, 800, 1200, 1800]));

// Output-
// 800