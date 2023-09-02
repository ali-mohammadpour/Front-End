/*
const User = function(id, email){   // in tabe "sazande" hast, va vazife dare bara ma objecte jadid besaze.
    this.id = id
    this.email = email
}

User.prototype.userInfo = function(){   // az tabe User(id, email) be komake prototype ersbari kard.
    return `Email: ${this.email} - ID: ${this.id}`
}

const username1 = new User(6, "test1@test.com")
console.log(username1.userInfo())

const username2 = new User(9, "test2@test.com")
console.log(username2.userInfo())
*/

class User{
    constructor(id, email){
        this.id = id
        this.email = email
    }
    userInfo(){
        return `Email: ${this.email} - ID: ${this.id}`
    }
}

const username = new User("test3@test.com", 80)
console.log(username.userInfo())
