// Many more methods to iterate objects through for of loop

const myobj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple',
}

myobj.Java = 'Java by oops'

for (const key in myobj) {
   //console.log(key)          // Accessing keys in objects
   //console.log(myobj[key])     // Accessing values in objects
   //console.log(`${key} shortcut is for ${myobj[key]}`)
}


// For In loop on ARRAYS
/*
const programming = ["js", "python", "java", "ruby",]  // Arrays ki keys starting from 0 and these are by default number
for (const key in programming) {
    //console.log(key)// printing keys like numbers 0,1,2,3,
    console.log(programming[key])// printing keys like numbers 0,1,2,3,

}
*/

// For In Loop on Maps
// Maps are not itteretable , so we cannot implement for in loop on maps like this
const map = new Map()
map.set('Am', "AMAN")
map.set('Sh', "Shalv")
map.set('Su', "Shubham")
map.set('Ab', "Abhay")

for (const key in map) {
    console.log(key)
}
