// scope and why we dont use var

var num3 = 34;

if (true) {
    let num1 = 20;
    const num2 = 21;
    var num3 = 300;
}

console.log(num3);   // even 300 is local value of num3 it is printed here
                     // that's why we don't use var


console.log(printMessage("you should code every day"))

function printMessage(message) {
    return `your message is ${message}`
}

// console.log(printMessage1("go for a walk"));  // will give error 


let mess = function printMessage1(message) {
    return `your message is ${message}`
}


// the line no 21 will give error 
// so while storing function in a variable Don't call it before declaration