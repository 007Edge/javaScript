// singleton using constructor
// e.g. const obj = new Object {}

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Abhay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "shiam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shivam",
            lastname: "edge"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);  
// ? provides protection in case fullname is not present (e.g. api call)


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};


/* 
    // ADDING objects

    // const obj3 = {obj1, obj2};    // will create nested object

    const obj3 = Object.assign(obj1, obj2);   
    // you can add an optinal parameter Object.assign({}, obj1, obj2);

    console.log(obj3);
    console.log(obj3 === obj1);   // obj1 is target and obj3 is return target
*/

// BEST way combine objects is to spread them

/* 
    const obj3 = {...obj1, ...obj2};
    console.log(obj3);
*/


/* 

    // Array of objects

    const users = [
        {
            name: "shivam",
            age: 20
        },
        {
            name:"edge",
            age: 20
        }
    ]

    console.log(users[0].name);
    console.log(users[1]["age"]); 

*/



/* 

    console.log(Object.keys(tinderUser));    // return type is array
    console.log(Object.values(tinderUser));     // return type is array
    console.log(Object.entries(tinderUser));    
    // return type is array and each index will contain an array
    // the inner array will contain (key, value) at (0, 1) respectively

*/

// console.log(regularUser.hasOwnProperty("email"));


/* 

    ******Object destructuring*****

    const course = {
        coursename: 'js with me!',
        price: 999,
        courseInstructor: "edge"
    }

    // some times it is not good pratice to use synatx like: course.consrseInstructor
    // insted of that use this: const {key} = obj_name || now you can access it by just console.log(key);

    const {courseInstructor} = course;
    console.log(courseInstructor);

    // or if you find to type courseInstructor very lenghtly
    // you can use: const {courseInstructor: cI} = course;  || now console.log(cI);

    const {courseInstructor: cI} = course;
    console.log(cI); 

*/
