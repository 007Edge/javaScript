const accountId = 12309409;
let accountEmail = "shivam@gmail.com";
var accountPassword = "12345";
accountCity = "Varanasi";
let accountState;

// accountId = 2131 not allowed

/* 
    don't use var
    reason - block scope
*/

accountEmail = "edge@gmail.com";
accountPassword = "4321";
accountCity = "Bengaluru";
console.log(accountId);

console.table([accountId,accountEmail, accountPassword, accountCity, accountState]);
