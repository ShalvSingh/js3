// array

const myArr = [0,1,2,3,4,5, true]
const myHeroes = ["shaktiman", "nagraj"]

//const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);
// console.log(myArr[3]);

//*************************************** Array Methods ****************************************** 

//myArr.push(54)
//console.log(myArr)

//myArr.pop(4)
//console.log(myArr)


//myArr.unshift(100) //insert element in an array
//console.log(myArr)

//myArr.shift(100)
//console.log(myArr)  // remove an element in an array

//console.log(myArr.includes(9));// checks if 9 is in array or not => ans =>false
//console.log(myArr.indexOf(3));// gives index of 3

// const newArr = myArr.join()  // converts array in simple form and into string also, check type is string
// console.log(myArr) // gives simple array in sq brackets
// console.log(newArr)
// console.log(typeof newArr)






//************************************************************* */ slice, splice*************************************************

console.log("A", myArr)

const myn1 = myArr.slice(1,3)  // slice array (index start, index end)
console.log(myn1)

console.log("B", myArr)

const myn2 = myArr.splice(1,3) // includes range also , and removes all slised element
console.log(myn2)

console.log("C ", myArr);// new array is changed 
 