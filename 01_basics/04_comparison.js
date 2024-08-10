console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null === 0); // false

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0, that is why (null >= 0); // true and (null <= 0); // true
// Applies same for the "Undefined" value as well.

