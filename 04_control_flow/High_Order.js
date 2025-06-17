// for each is a High_Order function
// map is also a Higher Order function



/* 

    const names = ["shivam", "aryan", "gopal", "shashwat", "hari"]

    names.forEach(function (i, idx, val){   // i contains the value of each index and type is string
                                            // idx contains the index value type is number
                                            // val contains the whole array type is object

        console.log(`${i}  ${idx} ${val}`);
        
    }) 
    
*/

const arr = [
    {
        user: "shivam",
        id: 1
    },
    {
        user: "alex",
        id: 2
    },
    {
        user: "Sony",
        id: 3
    }
]

arr.forEach((key)=>{
    console.log(key.user)   // key is storing object
    
})