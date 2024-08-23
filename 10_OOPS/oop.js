const user = {
    username: "Sandeep",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user Details");
        console.log(`Username: ${this.username}`); // this will get details from the obejcts out of context
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // here this gives empty list {}

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("Sandy", 8, true)
const userTwo = new User("Jogi", 4, false)
console.log(userOne);
console.log(userTwo);

// new key Word will create empty object
// next new constructor function will be called
// this key word will be injected with all the info
// the whole major function will be called 

