// for-of loop
const arr = [1, 2, 3, 4]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello !"

for (const greet of greetings) {
    // console.log(`Each char ${greet}`);    
}

// const map = new Map()
// map.set("IN", "INDIA")
// map.set("CH", "CHINA")
// map.set("FR", "FRANCE")
// map.set("IN", "INDIA")


// console.log(map); // op: Map(3) { 'IN' => 'INDIA', 'CH' => 'CHINA', 'FR' => 'FRANCE' },,, here India did not print again, this is the feature of Map, Map only prints unique and do not duplicate.

// for (const key of map) {
//     console.log(key); 
// }
// op: [ 'IN', 'INDIA' ]
// [ 'CH', 'CHINA' ]
// [ 'FR', 'FRANCE' ]

// for (const [key] of map) {
//     console.log(key); 
// } 
//op: IN
// CH
// FR

// for (const [key, value] of map) {
//     console.log(key, ":-", value); 
// }
// op: IN :- INDIA
// CH :- CHINA
// FR :- FRANCE

const myObj = {
    js: "Javascript",
    cpp: "C++",
    Py: "Python",
    rb: "Ruby"
}

// for (const key of myObj) {
//     console.log(key);
// }
// if for-of loop is used for iterating objects it is not possible hence op is TypeError: myObj is not iterable

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }
/* op:
js shortcut is for Javascript
cpp shortcut is for C++
Py shortcut is for Python
rb shortcut is for Ruby
*/

const programming = ["js", "rb", "py"]

for (const key in programming) {
    // console.log(key); 
}
/* op
0
1
2
*/
for (const key in programming) {
    // console.log(programming[key]); 
}
/*
js
rb
py
*/
// So in for-in loop directly key values are printed unlike for-of loop which prints the values directly

const map = new Map()
map.set("IN", "INDIA")
map.set("CH", "CHINA")
map.set("FR", "FRANCE")
map.set("IN", "INDIA")

// for (const key in map) {
//     console.log(key);   
// } // for-in loop cannot be used over maps, it gives error

const coding = ["js", "rb", "py", "cpp"]

// coding.forEach(function (val) {
//     console.log(val);
// }) //js
// rb
// py
// cpp

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);    
// })
/* op:-
js 0 [ 'js', 'rb', 'py', 'cpp' ]
rb 1 [ 'js', 'rb', 'py', 'cpp' ]
py 2 [ 'js', 'rb', 'py', 'cpp' ]
cpp 3 [ 'js', 'rb', 'py', 'cpp' ]
*/

const myCoding = [
    {
        languageName: "Javascript",
        languageFilename: "js"
    },
    {
        languageName: "CPP",
        languageFilename: "c"
    },
    {
        languageName: "Python",
        languageFilename: "py"
    }
]

myCoding.forEach ( (item) => {
    console.log(item.languageName);    
}) 
/*OP:-
Javascript
CPP
Python
*/