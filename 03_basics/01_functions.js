// Functions

function sum(a, b) {
    return a+b;
}

// console.log(sum(5, 10));

function isLogin(username) {   // parameters
    if (!username) {           // if we pass no argument while calling function the value of username will be undefined
        return "please enter your username";   // undefined = false || !undefined = true
    }
    return `Welcome ${username}`;
}

// console.log(isLogin("Shivam"));   // value passed are known as arguments

function calculateCartPrice(val1, val2, ...num1) {       // here "..." is rest operator
    return num1                                          // NOTE "..." is spread operator and rest operator both (usecase dependent).
}

// console.log(calculateCartPrice(300,330,220,120,540));

// ************** Objects & Functions ***************

function handleObject(anyObj) {
    return `Username: ${anyObj.name} and Age: ${anyObj.age}`
}

let user1 = {
    name: "Shivam",
    age: 20
}
let user2 = {
    name: "edge",
    age: -1
}

/*

    console.log(handleObject(user1));
    console.log(handleObject(user2));

    console.log(handleObject({
        name: "chai",
        age: 5
    }));

*/

// Functions and Array

function printFirstIdx(arr) {
    return arr[1];
}

let nums = [45, 3, 5, 3, 23]
console.log(printFirstIdx(nums));

console.log(printFirstIdx([34, 69, 233, 23]));


