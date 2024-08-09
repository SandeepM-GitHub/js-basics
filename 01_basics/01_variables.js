const accountId = 144553
let accountEmail = "josh@googs.com"
var accountPassword = "12345"
accountCity = "Bengaluru"
let accountState;

// accountId = 2 // not allowed
accountEmail = "loraine@hcl.com"
accountPassword = "54321"
accountCity = "Jaipur"

console.log(accountId);
/*
Prefer not to use var
Because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
