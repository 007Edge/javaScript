// if, else if, else

let age = 324;

/* 

    if (age >= 18 && age <= 120) {
        
        console.log("Adult");  
    }

    else if (age > 120 || age < 0) {
        console.log("Invalid Age")

    }

    else {

        console.log("teen");
    }

*/


// if(true) console.log("Hello");       // shorthand


/* 

    const userEmail = "shivam@gmail.com";

    if(userEmail) {
        console.log("Got user email");
        
    }
    else {
        console.log("Don't have user email");
        
    }

*/


/*  
    Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
    Truthy values: "0", 'false', " ", [], {}, function(){}

    NOTE : a string will be true value,
    and the empty string will be a false value. 
*/

/* 

    // Checking weather array is empty

    let userEmail =[];
    if(userEmail.length === 0) console.log("Array is empty");

    // Checking weather object is empty
    // Object.keys(obj) will return an array

    const obj = {} 
    if(Object.keys(obj).length === 0) console.log("Object is empty");

*/


/* 

    let day = "mon";

    switch(day) {

        case "sun":
            console.log("Sunday");
            break;

        case "mon":
            console.log("Monday");
            break;

        case "tue":
            console.log("Tuesday");
            break;

        case "wed":
            console.log("Wednesday");
            break;

    } 

*/


