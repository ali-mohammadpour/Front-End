const product = {
    title: "Book",
    price: 80
}

/*
const productTitle = product.title
const productPrice = product.price

console.log(productTitle)
console.log(productPrice)
*/

const {title, price, exist = true} = product

console.log(title)
console.log(price)
console.log(exist)
