// ******************* adding methods with prototyps **********************



// Person is the constructor function 
// using new keyword to create the object (personOne)

function Person(name) {
    this.name = name;    // this refers to current object
    return this;         // this line is written implicitly by JS removing this line will make no effect
}

const personOne = new Person('shivam');

Person.prototype.greet = function() {

    return `Hello ${this.name}`;
        
}

console.log(personOne.greet()); 

/* 
    ****************Working of new key word**************************
    
    when you call a function with new four things happen

    1. new empty object is created
    2. the this inside the constructor is set to new object
    3. the constructor prototype is assigned to the new object (__proto__)
       Person.prototype === personOne.__proto__    || true
    4. the new object is returned unless you explictiy return another object (refer to line 10)

    
*/


/* 

    Prototypal inheritance
    Prototype Chain obj-> Person.prototype -> Object.prototype -> null 

*/


// ********************** adding self made method to find true length ************************** 

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
    
    
}

"shivam       ".trueLength();
"edge".trueLength();