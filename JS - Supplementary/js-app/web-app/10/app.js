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
    },
    {
        title: "Book 4",
        exist: false
    }
]

const filters = {   // kare searche element ha ro anjam mide, ke az karbar gerefte mishe.
    searchItem: "",
    availableProducts: false   // neshan dadan ya nadadn.
}

const renderProducts = function(products, filters){
    document.querySelector("#products").innerHTML = ""   // baraye tage div. bade chap, arraye products ro khali mikonim.

    let filteredProducts = products.filter(function(item){   // filtere search ruye arraye products
        return item.title.toLowerCase().includes(filters.searchItem.toLowerCase())
    })
    filteredProducts = filteredProducts.filter(function(item){   // filtere mojudi
        if(filters.availableProducts === true){
            return item.exist === true
        }else{
            return true   // baghiye karash ra edame midahad.
        }
    })
    filteredProducts.forEach(function(item){   // loop ruye arraye filteredProducts va nomayeshesh.
        const productEl = document.createElement("p")
        productEl.textContent = item.title
        document.querySelector("#products").appendChild(productEl)
    })
}

// Calling function
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

document.querySelector("#available-products").addEventListener("change", function(event){
    filters.availableProducts = event.target.checked
    renderProducts(products, filters)
})
