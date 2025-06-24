const obj = {
    city: "varanasi",
    greet() {
        console.log(`Greetings from ${this.city}`);
        // console.log(this);
        
    }

}

obj.greet();

// this refers to current context

function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greet = function() {
        console.log(`hello ${this.username}`);
        
    }

    return this;
}

const userOne = new user('shivam', 1, true);
const userTwo = new user('alex', 1, true);

userOne.greet()
userTwo.greet()



