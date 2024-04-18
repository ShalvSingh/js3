//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);       // object type


//let myCreatedDate = new Date(2023, 0, 23)  // months started from 0 in js

//let myCreatedDate = new Date(2023, 0, 23, 5, 3) 
//console.log(myCreatedDate.toLocaleString())  //1/23/2023, 5:03:00 AM

let myCreatedDate = new Date("01-14-2023") // mm dd yy format 
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

//console.log(myTimeStamp)
//console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long"
})









