// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeroes = ["Shaktiman", "Bhaktiman"]

// const myArr2 = new Array(1, 2, 3, 4, 5, 6)
// // console.log(myArr);
// // console.log(myArr2);

// // Array methods

// myArr2.push(7)
// console.log(myArr2);
// myArr2.pop(6)
// console.log(myArr2);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const marvelHeroes = ["thor", "Ironman", "Spiderman"]
// const dcHeroes = ["Superman", "flash", "Batman"]

// marvelHeroes.push(dcHeroes) // it returns an existing array

// console.log(marvelHeroes); // here it does not merge both the arrays but instead creates another array inside an array

// const allHeroes = marvelHeroes.concat(dcHeroes) // it returns a new array
// console.log(allHeroes);

// const allHeroes = [...marvelHeroes, ...dcHeroes] // spread operators spreads the array, which can be done by "array.flat" function.
// console.log(allHeroes);

console.log(Array.isArray("Sandeep")); // Boolean value
console.log(Array.from("Sandeep")); // Converts into an array
console.log(Array.from({name: "hitesh"})); // interesting, this gives an empty array,  

let score1 = 111
let score2 = 222
let score3 = 333

console.log(Array.of(score1, score2, score3));
