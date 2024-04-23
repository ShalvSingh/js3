const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email");
}else {
    console.log("Dont have user email");
}

//FALSE values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//TRUTHY values

//"0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

//EMPTY OBJECTS
const emptyObj = {}

if(Object.keys(emptyObj).length === 0 ){
    console.log("Object is Empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1 ;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1)

//TERNIARY OPERATOR

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



