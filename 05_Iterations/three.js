// for of loop
// for (const iterator of object) {
    
// }

// ["", "", ""]
// [{}, {}, {}]  // array has different objects

const arr = [1, 2, 3, 4 ,]

for (const num of arr) {
    console.log(num);
}

let greetings = "Hello Good Morinig"

for (const  greet of greetings) {
    console.log(greet)
}



// ******************MAPS********************************
// Contains No Duplicate values 
// All values are unique

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map)

// for (const key of map) {
//     console.log(key)
// }

for (const [key, value] of map) {
    console.log(key, ':-', value)
}



/*
// PROBLEM 1: objects are not itterable here like this , there are many more methods to iterate objects diff to maps and this method is failed
const myobj = {
    'game1' : 'NFS',
    'game2' : 'FAR CRY',
}

for (const [key, value] of myobj) {
    console.log(key, '::=>', value)
}
*/