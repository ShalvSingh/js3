const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)// converted to string,  and now it has some additional properties 
console.log(balance.toFixed(3))    //    up to fixed precision value up to 3 decimal places

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))// indian standard of writing



// ++++++++++++++++++++++++++++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))// negative converted into +ve
console.log(Math.round(4.6))// roundoff to 5
console.log(Math.ceil(4.2))// roundoff to upward dirxn
console.log(Math.floor(4.9))// roundoff to downward dirxn
console.log(Math.pow(2,3))
console.log(Math.sqrt(144))
console.log(Math.min(4,3,6,8))// to find minm value in an array
console.log(Math.max(4,3,6,8))// to find maxm value in an array

console.log(Math.random())// always we get values in btwn 0 and 1, like 0.1, 0.2, 0.5, 0.4 etc
console.log((Math.random()*10) + 1) // value shifted to 1 place right side
console.log(Math.floor(Math.random()*10) + 1)// 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max- min + 1)) + min )








