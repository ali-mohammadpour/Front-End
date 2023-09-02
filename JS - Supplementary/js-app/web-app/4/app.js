const productItems = [
    {
        title: "Book1",
        exist: true
    },
    {
        title: "Book2",
        exist: false
    },
    {
        title: "Book3",
        exist: true
    },
    {
        title: "Book4",
        exist: false
    }
]

const availableProducts = productItems.filter(function(item){
    return item.exist === true
})

const message = document.createElement("h2")
message.textContent = `Number of available products: ${availableProducts.length}`
document.querySelector("body").appendChild(message)

productItems.forEach(function(item){
    const p = document.createElement("p")
    p.textContent = item.title
    document.querySelector("body").appendChild(p)
})
