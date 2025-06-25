class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email;
    }
}

const me = new Person("shivam", "edge07@gmail.com");


console.log(me.name);
console.log(me.email);


