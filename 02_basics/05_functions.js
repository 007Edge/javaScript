// Functions

function sum(a, b) {
    return a+b;
}

console.log(sum(5, 10));

function isLogin(username) {   // parameters
    if (!username) {           // if we pass no argument while calling function the value of username will be undefined
        return "please enter your username";   // undefined = false || !undefined = true
    }
    return `Welcome ${username}`;
}

console.log(isLogin("Shivam"));   // value passed are known as arguments

