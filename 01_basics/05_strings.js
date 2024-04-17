const name = "Aman "
const repocount = 50

// console.log(name + repocount + "value")     /// bad way of eriting

console.log(`Hello my name is  ${name} and my repocount is ${repocount} `);  // backticks, stringInterpositions , we create placeholders 
// we use this

const gameName = new String('Hitesh-   hc-hb   -yt-xing   -john')

console.log(gameName.__proto__);  // different string methods hote h , as we used in google inspect gameName and then a prototype is shown 

console.log(gameName.length);
console.log(gameName.toUpperCase());// but original value change nahi hui hai , yaad rakhna heap and stack wala
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4) // 0 to n-1 tak
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)


const newStringOne = "     Hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());// removes start and end spaces

const url = "https://hitesh.com/hitesh%20chaudhary"

m = url.replace('%20', '-')// sometimes brwser did not understand blank space , so it adds %20 automatically , to overcome this problem we use this
console.log(m)

n = url.includes('hitesh')// checks whether this is in link or not  
console.log(n)

console.log(gameName.split('-'));   // (seperator, limit)  => output =>[ 'Hitesh', 'hc', 'hb', 'yt', 'xing', 'john' ]
console.log(gameName.split(' '));


