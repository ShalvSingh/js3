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



