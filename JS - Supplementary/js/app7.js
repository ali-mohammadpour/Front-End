let isValidPassword = function(password){
    if(password.length >= 8 && !password.includes("12345")){
        return true
    }else{
        return false
    }
}

console.log(isValidPassword("abcd12345"))
console.log(isValidPassword("abcd12"))
console.log(isValidPassword("abcdabcd147"))
