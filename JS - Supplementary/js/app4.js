let userAccount = {
    fullName: "Ali Mohammadpour",
    balance: 1000
}

let addData = function(account, amount){
    account.balance = account.balance + amount
}

let print = function(account){
    console.log("Full name: " + account.fullName + " - Balance: " + account.balance)
}

addData(userAccount, 1000)
addData(userAccount, -160)
addData(userAccount, -200)

print(userAccount)
