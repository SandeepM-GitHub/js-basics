# js-basics
A code repo for JS learn

Javascript Execution Context
- Global EC - always
- Function EC
- Eval EC

* Memory Creation Phase
* Execution Phase

let val1 = 10
let val2 = 5

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(8, 2)

Step 1 - Global Execution - this
Step 2 - Memory Phase
    * val1 -> undefined
    * val2 -> undefined
    * adddNum -> definition 
    * result1 -> undefined
    * result2 -> undefined
Step 3 - Execution Phase
    * val1 -> 10
    * val2 -> 5
    * addNum ----> "new variable environment + Execution thread"
    * the above created environment will now again create another Memory phase and execution phase
Step 4 - Memory Phase
    * val1 -> undefined
    * val2 -> undefined
    * total -> undefined
Step 5 - Execution Phase
    * num1 -> 10
    * num2 -> 5
    * total -> 15 >>> now this result will stored in Global Execution then "new variable environment + Execution thread" will be "Deleted"
Step 6 - Line 20 will store the result1 = 15
Step 7 - Line 21 will start executing wrt step 2 as result2 is already stored as undefined.
    * result2 -> addNum ----> "new variable environment + Execution thread"
    * the above created environment will now again create another Memory phase and execution phase
Step 8 - Memory Phase
    * num1 -> undefined
    * val2 -> undefined
    * total -> undefined
Step 9 - Execution Phase
    * num1 -> 8
    * num2 -> 2
    * total -> 10 >>> now this result will stored in Global Execution then "new variable environment + Execution thread" will be "Deleted"
Step 6 - Line 21 will store the result2 = 10


CallStack will follow Last In First Out (LIFO)
