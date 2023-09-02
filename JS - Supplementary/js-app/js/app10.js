const cartItems = ["Book 1", "Book 2", "Book 3", "Book 4"]

cartItems.splice(0, 2, "New item")   // az indexe 0 shuru mikone va 2 ta ro pak mikone. bade kare delete, item jadid ro ezafe mikone.

console.log(cartItems)
