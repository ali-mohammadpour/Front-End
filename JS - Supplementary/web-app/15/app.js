// const productName = title => title

// console.log(productName("Book"))

const products = [
    {
        title: "Book 1",
        exist: true
    },
    {
        title: "Book 2",
        exist: false
    },
    {
        title: "Book 3",
        exist: true
    }
]

const filteredProducts = products.filter(item => item.exist === true)

console.log(filteredProducts)
