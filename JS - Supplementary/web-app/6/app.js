const products = [
    {
        title: "Node.js design patterns"
    },
    {
        title: "You dont know JS: this & object prototyes"
    },
    {
        title: "Functional React"
    },
    {
        title: "You dont know JS: Async & performance"
    }
]

const filters = {
    searchItem: ""
}

const renderProducts = function(products, filters){
    document.querySelector("#products").innerHTML = ""

    const filteredProducts = products.filter(function(item){
        return item.title.toLowerCase().includes(filters.searchItem.toLowerCase())
    })
    filteredProducts.forEach(function(item){
        const productEl = document.createElement("p")
        productEl.textContent = item.title
        document.querySelector("#products").appendChild(productEl)
    })
}

renderProducts(products, filters)

document.querySelector("#search-products").addEventListener("input", function(e){
    filters.searchItem = e.target.value
    renderProducts(products, filters)
})
