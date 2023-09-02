// Username
// Total price
// Products: Book1, Book2, Book3

const cartDetails = (username, totalPrice, ...products) => {
    console.log(`Username: ${username}`)
    console.log(`Total price: ${totalPrice}`)
    console.log(`Products: ${products.join(", ")}`)
}

cartDetails("AliMohammadpour", 188, "Book1", "Book2", "Book3")
