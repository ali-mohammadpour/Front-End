// tabdile code Synchronize be Asynchronize ba estefade az --- Callback function ---
const products = [
    {
        title: "Book 1",
        price: 80
    },
    {
        title: "Book 2",
        price: 30
    },
    {
        title: "Book 3",
        price: 60
    }
]

getProducts = () => {
    setTimeout(() => {
        const fetchProducts = products.map((item) => {   // "map" shabihe "forEach" amal mikone.
            return `Product: ${item.title} - Price: ${item.price}`
        })
        console.log(fetchProducts)   // chape array.
    }, 2000)
}

createProduct = (Xcallback) => {   // mikhaym in tabe be surate Async kar kone pas callback ro ru in tabe emal mikonim.
    setTimeout(() => {
        products.push({
            title: "New book",
            price: 100
        })
        Xcallback()
    }, 3000)
}

createProduct(getProducts)   // "()" nazashtam chon mikhaym be onvane reference azash estefade beshe na tabe.
