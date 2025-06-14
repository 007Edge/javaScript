let score = "33abc"

// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  // NaN   Not a Number


/* 
    While converting into Number
    "33" => 33 
    "33abc" => NaN    // still typeof variable will be a number
    "shivam" => NaN
    "ture" => 1
*/

let isLoggedIn = 1
let booleanIsLogggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLogggedIn);
// console.log(booleanIsLogggedIn);



/* 
    while converting in Boolean
    1 => ture
    0 => false

    "xyz" => ture
    "" => false
    
*/


let num = false
let stringNum = String(num)

console.log(typeof stringNum);
console.log(stringNum);






