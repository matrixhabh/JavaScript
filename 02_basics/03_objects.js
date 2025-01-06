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