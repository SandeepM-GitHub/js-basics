function one() {
    const username = "Sandy"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); // out of scope
    two()
}
// one()

function addOne(num){
    return num + 1
}
console.log(addOne(5))

console.log(addTwo(5))
function addTwo(num){
    return num + 2
}

const addThree = function(num) {
    return num + 3
}
console.log(addThree(5));

// console.log(addFour(5)); // out of four iterations for this syntax of "const addFour = func()" calling the function first will throw error as it cannot access.
const addFour = function(num) {
    return num + 4
}

