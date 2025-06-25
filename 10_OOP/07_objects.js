const descripter = Object.getOwnPropertyDescriptor(Math, "PI");    // (Object, property)
// console.log(descripter);

// OutPut
/* 
    {
    value: 3.141592653589793,         // value of PI
    writable: false,                  // can't change the value of PI
    enumerable: false,                // not itreable (Objects.key or for..in)
    configurable: false               // can't delete or reconfigure this property
    } 
*/

const Shivam = {
    name: "shivam",
    age: 20,
    work: 'coding',
    
    greet: function() {
        console.log("hello my name is shivam");
        
    }

}

// console.log(Object.getOwnPropertyDescriptor(Shivam, 'name'));


// changing the descriptor property of name;

Object.defineProperty(Shivam, 'name', {
    enumerable: false             // now name is not itrable 
})

// console.log(Object.getOwnPropertyDescriptor(Shivam, 'name')); 


// looping through object
for(let [key, value] of Object.entries(Shivam)) {
    if(typeof value !== 'function') {           // preventing function printing
        console.log(`${key} : ${value}`);     
    }
    
    
}

// the property will be printed except 'name'
// reason: we have change the enumerable to false