class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createId() {
        return `123`
    }
}

const san = new User("san")
// console.log(san.createId());

class teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "i@email.com")
console.log(iphone.createId());

