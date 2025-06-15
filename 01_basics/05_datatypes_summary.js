/* 

    Primitive

    7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

    let a = 10;
    a = 20;
    console.log(a);     You can't change value of a primitive (though you can reassign the variable)
 

*/

/* 

A Symbol is a primitive data type introduced in ES6 (ECMAScript 2015).
it represents a unique and immutable identifier.
NO two symbols are equal even if they have same description.

*/

const sym = Symbol();
const sym1 = Symbol("id");
const sym2 = Symbol("id");

// console.log(sym1 === sym2);   // false


// JavaScript is dynamic language 
// reason: don't need to declare data types when creating variables
//         type checking is done at run time.

/* 
    Reference (Non Primitive)
    
    Array, Object, Functions
*/

// examples
const hereos = ["Thor", "Thomas", "Jhon Wick"];   // array

let myObj = {       // Object
    name: "shivam",
    age: 22,
    
}

console.log(myObj.name);
console.log(myObj.age);


function sum(a, b) {           // Function
    return a+b;
}

let result = sum(5,6);        // calling and storing value
console.log(result);
