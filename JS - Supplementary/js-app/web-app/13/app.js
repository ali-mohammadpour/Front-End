/*
const product = {
    title: "Book",
    price: 80
}

const productJSON = JSON.stringify(product)   // "JSON.stringify()" tabdile object be string.

localStorage.setItem("product", productJSON)
*/

const productJSON = localStorage.getItem("product")

const product = JSON.parse(productJSON)   // "JSON.parse()" tabdile string be object.

console.log(`Title: ${product.title} - Price: ${product.price}`)
