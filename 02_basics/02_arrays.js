const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][2])    =>not a good way of writing

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// const all_heros = [...marvel_heros, ...dc_heros]    // spreading like breaking of glass
// console.log( all_heros)



//**************************** *  Mixing of all arrays inside one aray
// const another_array = [1, 2 , 3, [4, 5 , 6], 7 , [6, 7, [4, 5]]]   
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"}))  // Interview: gives empty array, ques make which array, values or keys

let score1 = 100
let score2 = 700
let score3 = 1400

console.log(Array.of(score1, score2, score3)) // returns a new array from a set of elements

