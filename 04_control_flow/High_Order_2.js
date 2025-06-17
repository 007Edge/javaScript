// Filters


const myNums = [1,2,3,4,5,6,7,8,9,10];

const arr = myNums.filter((num)=> {     // for even numbers
    if(num%2==0) return num
})

const arr1 = myNums.filter((num)=> num%2!=0 )   // for odd numbers
// NOTE: return type of the filter is object i.e. is an array

console.log(arr1);
console.log(typeof arr1);


// ******************* return using for each *************************

const newNum = []

myNums.forEach((num)=> {
    newNum.push(num)
})

console.log(Array.isArray(newNum));

for(i in newNum) {
    console.log(newNum[i]);
    
}

newNum.filter((num)=> {
    console.log(num);
    
})




