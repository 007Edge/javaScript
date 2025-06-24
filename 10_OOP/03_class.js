class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    getUser() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
}

const Shivam = new User('Shivam','edge@gmail.com');
console.log(Shivam.getUser());
console.log(Shivam.getEmail());



