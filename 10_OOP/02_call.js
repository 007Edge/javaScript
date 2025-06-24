/* 
    function setUserName(username) {
        this.username = username;
        console.log('called');
        
    }

    function createUser(username, email, password) {
        setUserName(username);
        this.email = email;
        this.password = password;
    }

     
        // make sure to add new key word before createUser: 
        // 1. which will create new object 
        // 2. the constuctor function will be called 
    

    const edge = new createUser('edge', 'edge@gmail.com', 1234);
    console.log(edge);    // createUser { email: 'edge@gmail.com', password: 1234 }

    // here we can see that username is not set 

*/

function setUserName(username) {
    this.username = username;
    console.log('called');
        
}

function createUser(username, email, password) {
    setUserName.call(this, username); 
    // before the setUserName get deleted from the memory 
    // it will hand over its properties to the createUser   
    this.email = email;
    this.password = password;
}
    

const edge = new createUser('edge', 'edge@gmail.com', 1234);
console.log(edge);    

