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

// console.log(typeof stringNum);
// console.log(stringNum);


// ************************* Operations *******************************

let value = 3
let negValue = -value
// console.log(negValue)

// NOTE: for multiline commet use:    [Ctrl + Shift + A]

/*

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

*/

let str1 = "Hello"
let str2 = "Shivam"

let str3 = str1 + str2
// console.log(str3);


let myVal = 100;
let postInc = myVal++;      // First, the value will be assigned to the variable, and then it will be incremented.

let myVal_1 = 100
let preInc = ++myVal_1;     // Now, it will be incremented first; thereafter, it will be assigned to the variable.

console.log(postInc);
console.log(preInc);




