// Immediately Invoked Function Expression (IIFE)

(function doSomeThing() {
    // Name IIFE
    console.log("IIFE");
})();

/* 
    ()()  here first parenthesis represents function body 
    and second one represents function execution. 
*/

// useCase: to proctect it from global scope pollution.

// Using arrow function for IIFE

((name)=> {
    console.log(`DB CONNECTED ${name}`);
}) ("Shivam");

// NOTE: make sure to use ; after function execution e.g. (--body--)(--execution--);