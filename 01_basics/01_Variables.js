const accountId = 14455
let accountEmail = "rishabh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "hdfc@com"
accountPassword = "34455"
accountCity = "varanasi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity])