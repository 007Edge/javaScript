const score = 100;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   // prints upto two decimal places


const otherNubmer = 22.3422;
// console.log(otherNubmer.toPrecision(2));  // prints 4 character of number

let hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-IN'));   // it will make the number readalbe

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// ******************** Maths *********************

// console.log(Math.PI);
// console.log(Math.abs(-4));
// console.log(Math.round(-4.6242));
// console.log(Math.ceil(4.2));  // 5
// console.log(Math.floor(4.2)); // 4
// console.log(Math.min(4,2,432,1));
// console.log(Math.max(4,2,432,1));


/* 
console.log(Math.floor(Math.random()));  // between 0 and 1 both are included
console.log(Math.floor((Math.random()*10)) + 1);   // for more range  || +1 for min value 1
*/
const min = 10;
const max = 20;
 
console.log(Math.floor(Math.random() * (max - min + 1)) + min);












