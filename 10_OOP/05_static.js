class Person {
    static count = 0;

    constructor(name) {
        this.name = name;
        Person.count++;
    }
    
    static reset() {
        Person.count = 0;
    }
}

const Alex = new Person('alex');
const Shivam = new Person('shivam');

console.log(Person.count);
Person.reset();
console.log(Person.count);

/* 
    Key Points

    1. static is used inside classes only.

    2. You access static members via the class, not instances.

    3. Static methods can't access this unless they're referencing the class itself.
*/