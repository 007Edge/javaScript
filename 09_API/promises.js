// creating a promise

/* 

    const promiseOne = new Promise(function(resolve, reject){
        // Do an async task
        // DB calls, cryptography, network

        setTimeout(function() {
            console.log("Async task is compeleted");
            resolve();    // resolve is connected to then
        }, 5000)
    }) 

    promiseOne.then(function(){
        console.log('Promise consumed');
        
    }) 
    
*/


/* 
    new Promise(function(resolve, reject){
        setTimeout(()=> {
            console.log("Async task 2");
            resolve();
        },2000);
        
    }).then(()=>{
        console.log("Promise complete");
    })
*/

// NOTE: you can send data from 'reslove(DATA)', and parameter in callback of 'then(function(data){})' will receive it


/* 

    const promiseThree = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({username: "Chai", email: "chai@example.com"});
        },1000)
    })

    promiseThree.then(function(user){
        console.log(user.username);
        console.log(user.email);
        
        
    }) 

*/


//  reject and using multiple .then()

// NOTE: we can use multiple then() just we need to return the value in .then function example is given below


/* 


    const promiseFour = new Promise(function(reslove, reject){
        setTimeout(function(){
            let connection = true;
            if (connection) {
                reslove({username: "edge", age: 20});
            }
            else {
                reject("Something went wrong")
            }
        },2000)
    }) 

    promiseFour.then(function(data){
        return data.age;
        
    }).then(function(age){
        console.log(age);
        
    }).catch(function(error){
        console.log(error);
        
    }).finally(()=> console.log("The promise is either resolved or rejected"))

    // the finally will always execute


*/



// ************************** async await *****************************

// first we create a async function and inside the function we store await promise_Name in a variable

/* 
    const promiseFive = new Promise(function(reslove, reject){
        setTimeout(function(){
            let error = true;
            if(!error) {
                reslove({username: "SHIVAM", age: 20})
            }
            else {
                reject("erroorrrr.....");
            }
        },1000)
    })

    async function consumePromiseFive() {
        try {
            const respose = await promiseFive   // promise consume ||  respose will get object from promiseFive
            console.log(respose.username);
            console.log(respose.age);
            
        }
        catch (error) {
            console.log(error);
            
        }
    }

    consumePromiseFive(); 
*/


// ******************** fetch *****************************

fetch('https://randomuser.me/api/')
.then(function(obj){
    return obj.json()
    
}).then(function(data){

    // console.log(typeof data.results[0].gender);
    // console.log(data.results[0].gender);
    
}).catch(function(error){
    console.log(error)
    
})



// ***************** fetch using async await catch ***********************
// ********** Syntax ********************


/* 

    async function getAllUsers() {
        try {
            const response = await 'Promise'
            console.log(response);
            
        } catch (error) {
            console.log(error);
            
        }
        
    } 
    
*/


// NOTE ensure to addd await in front of respose,json()

async function getAllUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json()    
        // console.log(typeof data);
        console.log(data.results[0].gender);
        
        
    } catch (error) {
        console.log(error);
        
    }
}

getAllUsers()