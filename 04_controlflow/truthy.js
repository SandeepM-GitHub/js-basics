const unit = []

if (unit) {
    console.log("Got Unit"); // an empty array [] this line will be executed
} else {
    console.log("No Unit"); // for an empty string "" this line will be executed
}

/*
Falsy values
false, 0, -0, BigInt 0n, "", null, undefined, NaN

Truthy values
true, "0", [], 'false', "false", " ", {}, function(){}
*/

// Nullish Coalescing Operator (??): null, undefined
let val1 = 5 ?? 10
console.log(val1); // 5

let val2 = null ?? 15
console.log(val2); // 15

let val3 = undefined ?? 10
console.log(val3); // 10

let val4 = null ?? 8 ?? 10
console.log(val4); // 8

// Terniary Operator-> condition ? true : false

const getPrice = 100
getPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");

