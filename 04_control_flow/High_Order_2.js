// ***************************** Filters *********************************
// filters return ture value no need for if condition


const myNums = [1,2,3,4,5,6,7,8,9,10];

const arr = myNums.filter((num)=> {     // for even numbers
    if(num%2==0) return num
})

const arr1 = myNums.filter((num)=> num%2!=0 )   // for odd numbers
// NOTE: return type of the filter is object i.e. is an array

// console.log(arr1);
// console.log(typeof arr1);


// ******************* return using for each *************************

const newNum = []

myNums.forEach((num)=> {
    newNum.push(num)
})

// console.log(newNum);
// console.log(Array.isArray(newNum));




// ********************* using same method for fiter to return values **************************

let val = []

newNum.filter((num)=> {
    val.push(num); 
})

// console.log(val);


// ********************** Very Important example, will help in retrieving data from data base *****


const books = [
    {
        title: 'Book One', genre: 'Non-Fiction', publish: 1989, editon: 2010
    },
    {
        title: 'Book Two', genre: 'Science', publish: 2009, editon: 2015
    },
    {
        title: 'Book Three', genre: 'Fiction', publish: 2004, editon: 2019
    },
    {
        title: 'Book Four', genre: 'Science', publish: 1999, editon: 2011
    }
]

const data = books.filter((bk) => bk.genre==='Science')
// console.log(data);

/* 
    We have an array containing objects : books=[]
    we are trying to retrieve books that have genre: 'Science'

    using filter: const data = books.filter((bk) => bk.genre==='Science')
    in this line bk is parameter which will receive each object one by one from books array
    now this line ` bk.genre==='Science' ` will return all the books object that have genre: 'Science'
    and that returned objects will be stored in the array data
    
*/


// ***************** Maps **************************

const arr2 = [1,2,3,4,5,6,7,8,9,10]

const sum1 = arr2.map((num) => num+10)
const sum2 = []
// same thing i am doing with for each
// note for returning in for each we need to explicitly push each iteration to array.
arr2.forEach((num) => sum2.push(num+20))

// console.log(sum1);
// console.log(sum2);


// **************** Chaining (using multiple HighOrder functions together) *********************

const chain = [1,2,3,4,5,6,7,8,9,10]

const result = chain.map((num) => num*10).map((num) => num+2)
// console.log(result);

/* 
    the first map function is multiplying each value by 10 and storing it
    note: at this point of time the stored array is not returned to the result
    now the another map function will start operation on the stored array
    and after completition second map function the array will be returned to the result
*/


//******************************** reduce ******************************

const arrray1 = [1, 2, 3, 4]; 

const initialValue = 0;
const sum3 = arrray1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
)

console.log(sum3);


// what's happening:   accumulator = accumulator + currentValue
// but at first iteration accumlator does not have any value that's why we give initialValue
