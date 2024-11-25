// Dates 

let myDate = new Date()
console.log(myDate.toString());
// Output-> Mon Nov 25 2024 20:58:25 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());
// Ouput-> Mon Nov 25 2024
console.log(myDate.toLocaleString());
// Output-> 11/25/2024, 8:58:25 PM
console.log(typeof myDate);
// Output-> object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());
// Output-> Mon Jan 23 3023
// Note that months listing starts from 0

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());
// Output-> 1/23/2023, 5:03:00 AM

