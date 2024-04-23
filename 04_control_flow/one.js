// if loop

const isUserLoggedIn = true

if( 2 == "2"){
    console.log("executed")
}
// === used for checking type as well as value

// 3!=2
// <,>, <=,>=,==,!=, ===, !==

const temperature = 41;
if(temperature <50){
    console.log("Temp is less than 50")
}
else{
    console.log("Temp is greater than 50")
}

/****************************************************************Mario Game*******************************************

const score = 500;
const power1 = "fly", power2 = "run" ,  power3 = "END";


if(score > 50 & score <200){
    console.log(`use power1: ${power1}`)
}
else if(score >=200 & score <700){
    console.log(`use power2: ${power2}`)
}
else{
    console.log(`Game Ended: ${power3}`)

}

*/




//*****************************Short Hand Notation***************************

const balance = 1000;

//if (balance > 500) console.log("test"),console.log("test2");  //Immature code no one write

//********************************************************************************************* */


//logging inproblem

const userLoggedIN = true, debitCard = true, LoggedFromGoogle = false, LoggedFromEmail = true;

if(userLoggedIN && debitCard && LoggedFromGoogle){
    console.log("Allow to Buy Course");
}
else if(LoggedFromGoogle || LoggedFromEmail){
    console.log("Allow to Buy Course < 400");
}
else{
    console.log("Not able to buy")
}





