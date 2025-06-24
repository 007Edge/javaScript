class User {
    constructor(username) {
        this.username = username;
    }
    
}

class Student extends User {
    constructor(username, email, pass) {
        super(username);  // behind the scenes: call(this, username) || for refer to 02_call.js
        this.email = email;
        this.pass = pass;
    }
    getDetails() {
        console.log(this.username);
        console.log(this.email);
        console.log(this.pass);
        
    }
}

const edge = new Student('edge','unknown@gmail.com',123);
edge.getDetails();

console.log(edge instanceof User);
console.log(edge instanceof Student);
