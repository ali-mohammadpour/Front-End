const cartItems = [
    {
        title: "Book1",
        price: 29
    },
    {
        title: "Book2",
        price: 59
    },
    {
        title: "Book3",
        price: 79
    }
]

const findProducts = function(array, productTitle){
     return array.find(function(item, index){
        return productTitle.toLowerCase() === item.title.toLowerCase()
    })
}

const result = findProducts(cartItems, "book3")

console.log(result)
