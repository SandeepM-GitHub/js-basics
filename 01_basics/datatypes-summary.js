/* 
Primitive
- 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

Reference (Non-Primitive)
- Array, Objects, Functions, 
*/

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId); // false, because its the characteristics of the 'Symbol' type

// Data types need to be learnt from ecmaScript.

// Stack(Primitive), Heap(Non-Primitive).

let myName = "Sandeep"
let anotherName = myName
console.log(anotherName);

anotherName = "Sandy"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "userOne@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;
console.log(userTwo.email);

userTwo.email = "Jacob@gmail.com"

console.log(userTwo.email);
