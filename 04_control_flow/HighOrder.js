const arr = [1, 2, 3, 4, 5]


/* 

    // for of loop 
    // syntax: for(const iterator of objects) {body}

    for (const num of arr) {
        console.log(num);
    } 
    
*/

/* 

    const greetings = "Hello Guys!"

    for (const greet of greetings) {
        console.log(greet);
        
    } 
    
*/

// using Map with for of loop

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "Frace")
map.set("IN", "India")   // same key will not be added & will not give any error also

// console.log(map);

/*

    for (const key of map) {

        console.log(key);  // will print an array containing key value pair
    } 

*/

/* 

    for (const [key, value] of map) {  // now we will get key value pair in diffrent variables

        console.log(`${key}, ${value}`);
        
    } 

*/

const obj = {
    name: "shivam",
    age: "20",
    lang: "eng",
    pc: 'hp'
}

// objects are not iteralbe with for of loop
// use for in loop for objects

// ******************** objects iteration ************************* 

/* 
    for (const key in obj) {

        console.log(obj[key]);    // NOTE: don't use obj.key or obj.["key"] here.
        
    } 
*/

/* 
for (const key in obj) {

    console.log(`value of ${key} is ${obj[key]}`);
} 
*/

const arr1 = ['hi', 'by', 'sy', 'tv']

for (const key in arr1) {

    console.log(arr1[key]);   // key => index
}

// NOTE: we can't use for-in loop on map.