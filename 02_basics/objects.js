// // // Object Singleton
// // // singleton: whenever it is done by Literals it is not singleton.

// // // Object literals
// // const mySym = Symbol("key1") // creating a symbol datatype

// // const jsUser = {
// //     name: "Sandeep",
// //     "fullname": "Sandeep M",
// //     [mySym]: "key2", // declaring the symbol datatype, with brackets it is a symbol datatype but without brackets it is a string type
// //     age: 24,
// //     location: "Banglore",
// //     email: "jog@email.com",
// //     isLoggedIn: false,
// //     lastLoggedIn: ["Monday", "Tuesday"]
// // }

// // // console.log(jsUser.name); // this is first way
// // // console.log(jsUser["name"]); // this is the second way for the above
// // // console.log(jsUser["fullname"]); // this is the only way if the key is given in String format

// // // jsUser.email = "John@email.com" // changing the email
// // // console.log(jsUser.email);
// // // Object.freeze(jsUser) // freezing the key value for any further changes
// // // jsUser.email = "sandeep@email.com"
// // // console.log(jsUser.email); // the above email wont print since the email was frozen by Object.
// // jsUser.greeting = function() {
// //     console.log("Hello JS User");
// // }
// // jsUser.greetingTwo = function() {
// //     console.log(`Hello JS User, ${this.name}`);
// // }

// // console.log(jsUser.greeting());
// // console.log(jsUser.greetingTwo());

// // const pyUser = new Object() // this is a singleton object.
// const pyUser = {} // non singleton object

// pyUser.id = "123a"
// pyUser.name = "Jogi"
// pyUser.isLoggedIn = false

// // console.log(pyUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Sandeep",
//             lastname: "sandy"
//         }
//     }
// }
// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// // const obj3 = {obj1, obj2} // this will not merge both the obj's

// // const obj3 = Object.assign({}, obj1, obj2) // this is the way to make both the obj's to a single array, without {} also gives the correct array but some cases it wont so its better to use {} all the time will merging both the obj's. 
// const obj3 = {...obj1, ...obj2} // another way and mostly used way to make it into an array
// // console.log(obj3);

// console.log(pyUser);
// console.log(Object.keys(pyUser)); // this will only gives keys and helps in applying loops over the keys only
// console.log(Object.values(pyUser)); // this will only gives values and helps in applying loops over the values only
// console.log(Object.entries(pyUser));

// console.log(pyUser.hasOwnProperty('isLoggedIn')); // checks the presence of the prop and gives the boolean value


// Destructure
const course = {
    courseName: "Js in comp",
    price: "999",
    courseInstructor: "Sandy"
}

// course.courseInstructor
const {courseInstructor: Instructor} = course
// console.log(courseInstructor);// this is another way of printing the value
console.log(Instructor); // this is another way of printing the value

