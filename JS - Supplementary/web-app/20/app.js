// ?
class User{
    constructor(id, email){
        this.id = id
        this.email = email
    }
}

class Job extends User{
    constructor(id, email, jobTitle){
        super(id, email)   // migim kudum ghesmat az kelase asli ro mikhaym tu classe Job azash estefade konim.
        this.jobTitle = jobTitle
    }
}

const username = new Job("test@test.com", 50, "Developer")
console.log(username)
