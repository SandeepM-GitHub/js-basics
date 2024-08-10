/* 
Primitive
- 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

Reference (Non-Primitive)
- Array, Objects, Functions, 
*/

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false, because its the characteristics of the 'Symbol' type

// Data types need to be learnt from ecmaScript.