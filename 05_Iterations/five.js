const coding = ["js", "java", "ruby", "python", "cpp"];

/*
coding.forEach( function greet(val){
    console.log(val);
} )
*/

// coding.forEach((item) =>{
//     console.log(item);
// })


// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })



// When Array has different objects

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "jvm"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "ruby on rails",
        languageFileName: "rb"
    },
]


myCoding.forEach((item) => {
    console.log(item.languageName)
})

