const cartItems = ["Book 1", "Book 2", "Book 3", "Book 4"]

// Remove first and third item.
// Add new item.
// Show array products.

cartItems.shift()
cartItems.splice(1, 1)
cartItems.push("Book 5")

cartItems.forEach(function(item, index){   /* ? */
    console.log("Product name: " + item + " - " + (index + 1))
})
// avvalin argomane tabe mishe mohtavaye un khune. va dovvomin argoman shomare khune array ro miyare.
