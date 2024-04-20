// singleton : object of its own type , single object only.... INTERVIEWS: jb bhi hm literals ki tarah dclare krte hai to singleton nahi banta hai,
// constructor se jab bhi banega to ha singleton banega
// objects.create


myArray = ["H", "I"]
myArray[1]  // like this we access array elemets, but this story changed in objects, here we can define keys as well as objects


// Object literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Hitesh",
    "full name": "Hitesh chaudhary",     // cannot access values like this from .
    [ mySym ]: "mykey1",
    age: 18, 
    location: "Jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Sturday"]
}

    // console.log(JsUser.email)
    // console.log(JsUser["email"])
//console.log(JsUser["full_name"])  //=>cannot access these objects like this or from dot

// Interview ques: take a symbol , add in (object keys) , and print it.?
    // console.log(JsUser.mySym)
    // console.log(typeof JsUser.mySym)  // creating problem , not acting like symbol, for this use [] sq brackets
    // console.log(JsUser[mySym])  //###    access symbols like this     ###

// How to change values in js
JsUser.email = "amansingh@gmail.com"
// How to stop anyone to change values
    //Object.freeze(JsUser)
    //JsUser.email = "king_palace"
    //console.log(JsUser)


                            /*            JsUser.greeting = function(){
                                            console.log("Hello JS user");
                                        }

                                        console.log(JsUser.greeting)  // showing :[Function (anonymous)]
                                        console.log(JsUser.greeting()) // perfectly printing                        */



JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
    console.log(`Hello JS user, your age is ->${this.age}`);// this is used to take reference of the objects
}
console.log(JsUser.greeting2());

