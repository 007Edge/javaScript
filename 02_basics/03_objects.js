// object litrals

const mySym = Symbol("myKey");

const JsUser = {
    name: "Shivam",
    age: 18,                       // all the variables are treated as string
    location: "Varanasi",                       // e.g. age: 18 => "age": 18
    email: "shivam@icloud.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "OS": "IOS",
    [mySym]: "myKey1"                    // using symbol
}


/*

console.log(JsUser.name);
console.log(JsUser["age"]);     
console.log(JsUser["OS"]);
console.log(JsUser[mySym]);             // accessing the symbol

*/
     

JsUser.email = "shivam@gmail.com"
// console.log(JsUser.email);

// Freezing the object
// now the changes will not be made & and if you make changes no error will occur
/*

Object.freeze(JsUser);                      
JsUser.email = "shivam@outlook.com"
console.log(JsUser.email);

*/

JsUser.greeting = function() {
    console.log("hello Js user");
}
JsUser.greeting2 = function() {
    console.log(`hello my Symbol is ${this[mySym]}`);
    console.log(`hello my name is ${this["name"]}`);
    console.log(`hello my age is ${this.age}`);

}

JsUser.greeting();
JsUser.greeting2();



