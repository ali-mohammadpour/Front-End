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

const findProducts = function(array, productTitle){   // Local function
     const indexNum = array.findIndex(function(item, index){   // Local function
        return item.title.toLowerCase() === productTitle.toLowerCase()   // age true bashe, tarafe chape moghayese ro barmigardune.
    })
    return array[indexNum]
}

const result = findProducts(cartItems, "book3")

console.log(result)
