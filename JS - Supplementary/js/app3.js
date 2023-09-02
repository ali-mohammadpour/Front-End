let userAccount = {
    fullName: "Ali Mohammadpour",
    outgo: 0,
    income: 0
}

let addOutgo = function(account, amount){
    account.outgo = account.outgo + amount
}

let addIncome = function(account, amount){
    account.income = account.income + amount
}

let getAccountData = function(account){
    let balance = account.income - account.outgo
    return "Account name: " + account.fullName + " - " + "Balance: " + balance
}

addIncome(userAccount, 2000)
addOutgo(userAccount, 160)
addOutgo(userAccount, 200)
getAccountData(userAccount)

console.log(getAccountData(userAccount))
