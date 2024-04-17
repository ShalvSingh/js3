// Primitive 

            // 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false;
const OutsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);// false , becoz symbol is unique each time 

const bigNumber = 3215452354661631315415146545263266n
console.log(bigNumber)

// Reference (Non Primitive)

//Array, Objects Functions

const heroes = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "aman",
    age: 22,
}
const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)=> me jab ref lete hai to copy milta hi, ***   Heap(Non Primitive)=> heap se wapis se jab ref lete h to copy nhi milta hai , original value ka reference milta hai

let myYoutubename = "hiteshchaudharydotcom"
let anothername = myYoutubename


anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// Another example --> 
let userOne = {
    name: "Aman singh",
    email: "aman123gmail.com"
}

let userTwo = userOne

userTwo.email = " singh@google.com"
userTwo.name = " AMAN SINGH"

console.log(userOne.email)
console.log(userTwo.email)


console.log(userOne.name)
console.log(userTwo.name)



