const coding = ["js", "java", "ruby", "python", "cpp"];

const values = coding.forEach((item) => {
    //console.log(item)
    return item
})

//console.log(values);  // undefined , cannot return anything



//+++++++++++++++++++some more methods = 1) FILTER method = ye bbhi apne andr callback hi leta hai
const myNums = [1,2,3,4,5,6,7,8,9,10]
/*

//const newnums = myNums.filter((num) => num > 4 )                      // foreach cant return vaues, but it returns
const newnums = myNums.filter((num) => {              // agar scope open krte hai to return keyword use karna padega 
    return num > 4} )                      // empty array = []
console.log(newnums)

*/

/*
const newNums = []

newNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);

*/

/* --------------------------------------------------EXERCISE ----------------------------------------------------*/

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981 , edition: 2004 },
    {title: 'Book Two', genre: 'Non-Fiction', publish:1992, edition: 2005 },
    {title: 'Book Three', genre: 'History', publish: 1993, edition: 2006},
    {title: 'Book Four', genre: 'Science', publish: 1994, edition: 2007},
    {title: 'Book Five', genre: 'Non-Fiction ', publish:1995, edition: 2008},
    {title: 'Book Six', genre: 'Fiction ', publish: 1996, edition: 2009},
    {title: 'Book Seven', genre: 'History', publish: 1997, edition: 2010},
    {title: 'Book Eight', genre: 'Science', publish: 1998, edition: 2011},
];


// Those Books Which containing genre history
//const userBooks = books.filter((bk) => bk.genre === 'History')

// Those books which containing publish after 2005
//const userBooks = books.filter((hk) => hk.publish >= 1993)
//const userBooks = books.filter((hk) => {return hk.publish >= 1993 })// if opening scope then use return keyword
const userBooks = books.filter((hk) => {
    return hk.publish >= 1993 && hk.genre === "History"
})




console.log(userBooks);