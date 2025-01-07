// const TinderUser = new Object()
// give null value {}

const TinderUser = {} // Gives the same output null {}

TinderUser.userid = "123abc"
TinderUser.name = "Kratos"
TinderUser.isLoggedin = false

// console.log(TinderUser);

// Output : { userid: '123abc', name: 'Kratos', isLoggedin: false }

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Rishabh",
            lastname: "Yadav"
        }
    }
}

console.log((regularUser.fullname));

// To access and store whole object.
// Output: { userfullname: { firstname: 'Rishabh', lastname: 'Yadav' } }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign ({}, obj1, obj2, obj4)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2}
console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]
// here are a lot of objects under array

users[1].email
console.log(TinderUser); 
// { userid: '123abc', name: 'Kratos', isLoggedin: false }
console.log(Object.keys(TinderUser)); // for printing assigned varibales
// [ 'userid', 'name', 'isLoggedin' ]
console.log(Object.values(TinderUser)); // for printing values
// [ '123abc', 'Kratos', false ]
console.log(Object.entries(TinderUser));
// [
//     [ 'userid', '123abc' ],
//     [ 'name', 'Kratos' ],
//     [ 'isLoggedin', false ]
//   ]

// To save the unentered entries from crashing
// we use hasOwnProperty function

console.log(TinderUser.hasOwnProperty('isLoggedin'));
// Gives boolean value : true 
console.log(TinderUser.hasOwnProperty('isLogged'));
// Gives boolean value : false 



// De-structuring:-


const course = {
    coursename: "Js",
    price: "999",
    courseEnroller: "Rishabh"
}

// course.courseEnroller

const {courseEnroller} = course

console.log(courseEnroller);

// React concept to understand de-structuring
const navbar = ({company}) => {

}

navbar(company = "Rishabh" ) 

// By the removal of the old XML and embedment of new JSON we understand-

// {
//     "courseEnroller": "Rishabh",
//     "price": "free",
//     "course": "Js"
// }
// here the keys and values both must be in the string format.