const coding = ["js", "rb", "py", "cpp"]

// coding.forEach( (item) => {
//     console.log(item);   
// })

// const val = coding.forEach( (item) => {
//     console.log(item);   
// })

// console.log(val); // this would give undefined

const nums = [1, 2, 3, 4, 5, 6, 7]

// const newNums = nums.filter( (num) => (num > 4)) // since it is a single line no need of scope and return key word.
// const newNums = nums.filter( (num) => {
//     return (num > 4) // if scope {} is used then "return" key word has to be used else it will throw an error
// })
// console.log(newNums);

const newNums = []
nums.forEach ( (num) => {
    if (num < 4) {
        newNums.push(num)
    }
})

console.log(newNums);






