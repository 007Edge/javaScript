// String is a primitive data type

let str = "shivam";                     // old method
let str1 = `Hello my name is Shivam`;   // backticks (template litrals)

// console.log(str1);   
// console.log(str1.length);
// console.log(str1[4]);
// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());

// console.log(str1.substring(6,8));

/*

parameters (startIdx, endIdx)   
NOTE: 8th idx is not included.
if you pass -ve values it will be treated as 0.
if startIdx > endIdx, it will be swaped e.g. str.substring(7,2) => str.substring(2,7). 

*/

// console.log(str1.slice(6,8));

/*

parameters (startIdx, endIdx)   
NOTE: 8th idx is not included.
-ve value is allowed || and no swaps

*/

// console.log(str1.replace("name","naam"));
// console.log(str1.includes("Shivam"));  // return type is boolean
// console.log(str1.indexOf("my"));

/* 

you can pass a string or a character
returns idx of first char

*/

// console.log(str1.charAt(6));
// let inputStr = `    Shivam     `;
// console.log(inputStr);
// console.log(inputStr.trim());


// converting string into array using split
// let str2 = `Shivam is aka edge`;
// console.log(str2.split(" "));

// Backticks ``

let name = "shivam"
let age = 22;
let sentence = `my name is ${name} and I am ${age} years old.`;

console.log(sentence);














