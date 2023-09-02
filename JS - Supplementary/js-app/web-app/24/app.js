// tabdile code Synchronize be Asynchronize ba estefade az --- Promises ---
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
        const fetchProducts = products.map((item) => {
            return `Product: ${item.title} - Price: ${item.price}`
        })
        console.log(fetchProducts)
    }, 2000)
}

createProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            products.push({
                title: "New book",
                price: 100
            })
            const error = true
            if(!error){   // ?
                resolve()
            }else{
                reject("Error")
            }
        }, 3000)
    })
}

createProduct()
    .then(getProducts)
    .catch(err => console.log(err))   // ?
