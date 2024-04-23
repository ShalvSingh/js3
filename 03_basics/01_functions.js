
function syMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

syMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}

addTwoNumbers(3,"4")

function loginUserMessage(username = " sam "){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())


// ****************************REST Operator and SPREAD operator 
//Example: amazon , flipkart adding of items in cart and calculating price
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400, 500))


const user = {
    username: "aman",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}  and price is ${anyobject.price}` )
}

// handleObject(user)

/*handleObject({
    username: "sam",
    price: 399
})
*/

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))                                     //Both are correct way to pass an array
// console.log(returnSecondValue([200, 400, 100, 600]))





