const accountId = 144553    
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;    // undefined in js

// accountId = 2        // not allowed

console.log(accountId);


accountEmail = "aman@google.com"
accountPassword = "1239"
accountCity = "bangalore"

/*
prefer not to use var 
because of issue in block scope aur functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountState])