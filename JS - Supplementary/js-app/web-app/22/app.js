// ?
class User{   // be surate object
    constructor(id, email){
        this.id = id,
        this.email = email
    }
    get userInfo(){
        return `ID: ${this.id} - Email: ${this.email}`
    }
    set userInfo(value){
        const parts = value.split(" ")
        this.id = parts[0]
        this.email = parts[1]
    }
}

const username = new User(60, "test@test.com")
username.userInfo = "55 test@test.org"
console.log(username)
