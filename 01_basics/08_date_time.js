// Dates are object

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());// date
// console.log(myDate.toLocaleString());    // date and time
// console.log(myDate.toLocaleTimeString());// time
// console.log(myDate.toDateString());

// let myCurrentDate = new Date(2025, 5, 16);  // Note month start from 0 that means 0 is for jan.
// let myCurrentDate = new Date(2025, 5, 16, 5, 3);
// let myCurrentDate = new Date("2025-06-16");

let myCurrentDate = new Date("06-16-2025");
// console.log(myCurrentDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);       // long value => miliseconds
// console.log(myCurrentDate.getTime());   // now you can compare this with above line
// console.log(Math.floor(Date.now()/1000));  // in seconds

let newDate = new Date();
// console.log(newDate.getMonth());   // returns month number (month starts from 0)
// console.log(newDate.getDate());
// console.log(newDate.getHours());

console.log(newDate.toLocaleString(`default`, {weekday: "long"}));

// long => Monday
// short => Mon
// narrow => M










