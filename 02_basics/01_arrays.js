// Array

// const myArr = [0, 1, 2, 3, 4, 5, true, "rishabh"]
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Superman", "Batman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array Methods

myArr.push(6) // adds values upto 6 (after mentioned digits)
myArr.pop() // removes the last value
myArr.unshift(9) // adds '9' infront
// Output-  

// [
//   9, 0, 1, 2,
//   3, 4, 5
// ]
console.log(myArr.includes(9)); // trur
// console.log(myArr.indexOf(9)); // 0
console.log(myArr.indexOf(3)); // 4

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
// Output- 9,0,1,2,3,4,5
console.log(typeof newArr); // string


// slice & spice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
