let userInfoOne = {
    userId: 22,
    username: "Ali's_username",
    role: "Admin"
}

let userInfoTwo = {
    userId: 47,
    username: "Test",
    role: "User"
}

let fetchUserData = function(user){
    console.log("Username is: " + user.username)
}

fetchUserData(userInfoOne)
fetchUserData(userInfoTwo)
