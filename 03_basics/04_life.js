// Immediately Invoked Function Expressions (IIFE)


//++ NAMED IIFE

(function chai(){
    console.log(`DB CONNECTED`);
})();  // we need to add or use semicolon here after using this function
//chai()

// Global Scope k pollution se jo problem hoti hai , usko hatane k lia hamne IIFE ka use kia 

//()()   First is for Function Definition and Second is for Function Execution


//++ SIMPLE IIFE 
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');