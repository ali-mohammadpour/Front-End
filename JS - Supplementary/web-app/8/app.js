const products = []

const filters = {   // kare searche element ha ro anjam mide, ke az karbar gerefte mishe.
    searchItem: ""
}

const renderProducts = function(products, filters){
    document.querySelector("#products").innerHTML = ""   // baraye tage div. bade chap, arraye products ro khali mikonim.

    const filteredProducts = products.filter(function(item){   // filter ruye arraye products
        return item.title.toLowerCase().includes(filters.searchItem.toLowerCase())
    })
    filteredProducts.forEach(function(item){   // loop ruye arraye filteredProducts
        const productEl = document.createElement("p")
        productEl.textContent = item.title
        document.querySelector("#products").appendChild(productEl)
    })
}

renderProducts(products, filters)   // mahsulat ro namayesh mide va filter(search) ham mikone.

document.querySelector("#search-products").addEventListener("input", function(e){   // gharar dadane inpute search dar filters
    filters.searchItem = e.target.value
    renderProducts(products, filters)
})

document.querySelector("#add-product-form").addEventListener("submit", function(e){   // nomayeshe mahsulate vared shode
    e.preventDefault()
    products.push({
        title: e.target.elements.productTitle.value,
        exists: true
    })
    renderProducts(products, filters)
    e.target.elements.productTitle.value = ""   // khali kardane dakhele inpute forme "add-product-form"
})
