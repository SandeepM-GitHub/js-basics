function myName () {
    console.log("sandeep");
}

// myName() // just function name is called a reference and if u put () then its an execution.

// function addNums(num1, num2) {
//     console.log(num1 + num2);
// }

// const result = addNums(3,4) // this will give the sum but the value stored in result is different

// console.log(result); // value of result is undefined

function addNums(num1, num2) {
    let result = num1 + num2
    return result
    console.log(sandeep); // this value will not be printed since the return function has been executed by function definition.
}

const result = addNums(3,4) // this will give the sum and the value stored in result is same

// console.log(result); // value of result is not-undefined

function calcCart(...nums) { // ... is a rest operator
    return nums
}

// console.log(calcCart(100, 200, 300, 400)); // Without the rest(...) operator it will only print 100

const user = {
    userName: "Sandeep",
    price: 199
}

function handleObj(anyObj) {
        console.log(`Username is ${anyObj.userName} and the price is ${anyObj.price}`); 
}

// handleObj(user) 

handleObj({
    userName: "Jog",
    price: 299    
}) // another way of declaring Obj