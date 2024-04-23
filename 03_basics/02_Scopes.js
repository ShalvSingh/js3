let a = 300

if(true) {
    let a = 10
    const b = 20
    //console.log("INNER: ", a)
}
//console.log(a);

/*

//****************************************** *NESTED functions => closure
function one(){
    const username = "Hitesh";

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    console.log(website);

    two()
}

*/

/*

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube";
        console.log(username + website);
    }
//    console.log(website);
}
//console.log(username)

*/


//++++++++++++++++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1;
}


// ERROR : becoz we holded that function here in a variable like const  ==> HOISTING
addTwo(6)
const addTwo = function(num){
    return num + 2
}


