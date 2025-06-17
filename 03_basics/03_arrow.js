const user = {
    username: "shivam",
    price: 999,

    welcomeMessage: function() {

        console.log(this);
        
        return `${this.username}, wellcome to website`;
    }
    
    
}

// console.log(user.welcomeMessage())

// console.log(this);   // {}        NOTE: in browser it will show window

/*

    function chai() {

        console.log(this);
    }

    chai() 

*/

// ************************* arrow function *************************

const chai = () => {

    let user = "shivam";
    console.log(user);
}

// chai();


/* 

    // One line arrow function
    // implicit return

    const addTwo = (num1, num2) => num1+num2;   
    console.log(addTwo(5,2)); 

*/

// using arrow function to return object 

const Person = (name) => ({username: name})
console.log(Person("Shivam").username);

/* 
NOTE: to return object {} in arrow function we can't directly write {} after =>(arrow) 
      we need to wrap object into parenthesis e.g. => ({-----})

      Person("Shivam") will be an object, reason: Person is returning object
      and Person("Shivam").username will give us "Shivam"
*/








