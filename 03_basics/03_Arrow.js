// this => taling about current context


// creating object
const user = {
    username: "Hitesh",
    price: 999,

    // function
    welcomMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this)
    }
}


user.welcomMessage()
user.username = "Sam"
user.welcomMessage()

// WINDOW is a GLOBAL object whict is in browser

/*
function chai(){
    //console.log(this);
    let username = "Hitesh"
    console.log(this.username)// undefined , wecannot use this in functions like that
}
chai()
*/


/************************************************************************************************************************************ */
// DIFFERENCE in ARROW function
/*
const chai = function ()  {
    let username = "Hitesh"
    console.log(this.username);
}

*/

const chai = () => {
    let username = "hitesh"
    console.log(this);
}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// IMPLICIT Return
const addTwo = (num1, num2) => (num1 + num2)
const addTHo = (num1, num2) => ({name: "hitesh"})
console.log(addTHo(3,4))

// const myArray = [2,5,8,9]
// myArray.forEach(() => ())





















