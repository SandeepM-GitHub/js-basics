// IIFE: Immediately Invoked Function Expressions

(
    function metro() { // named IIFE
        console.log("Sandeep");
        
    }
)(); // this is the syntax for IIFE, this means you are calling the function immediately, the semi colon is a must for this syntax to end the IIFE function else next IIFE function wont run
// To avoid the pollution of the Global scope variables IIFE is used.

// arrow functions style for IIFE

( (name) => { // Un-named IIFE
    console.log(`Hello ${name}`);
}) (`Sandeep`)