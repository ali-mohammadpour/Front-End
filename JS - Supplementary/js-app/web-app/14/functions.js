// --- getSavedProducts() ---
const getSavedProducts = function(){
    const productsJSON = localStorage.getItem("products")
    if(productsJSON !== null){
        return JSON.parse(productsJSON)
    }else{
        return []
    }
}

// --- renderProducts() ---
const renderProducts = function(products, filters){
    products = sortProducts(products, filters.sortBy)

    let filteredProducts = products.filter(function(item){   // araye "filteredProducts" baraye search.
        return item.title.toLowerCase().includes(filters.searchItem.toLowerCase())
    })

    filteredProducts = filteredProducts.filter(function(item){   // araye "filteredProducts" baraye mojudi.
        if(filters.availableProducts){
            return item.exist
        }else{
            return true   // chera nemishe else ro khali gozasht?
        }
    })

    document.querySelector("#products").innerHTML = ""

    filteredProducts.forEach(function(item){
        document.querySelector("#products").appendChild(createProductDOM(item))
    })
}

// --- createProductDOM() ---
const createProductDOM = function(item){
    const productEl = document.createElement("div")   // root dar inja.
    const checkbox = document.createElement("input")
    const productItem = document.createElement("a")
    const removeButton = document.createElement("button")

    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = !item.exist   // dar surate adame mojudi checkbox tik bokhore.
    productEl.appendChild(checkbox)
    checkbox.addEventListener("change", function(){
        toggleProduct(item.id)
        saveProducts(products)   // zakhire dar local storage.
        renderProducts(products, filters)   // nomayesh
    })

    productItem.textContent = item.title
    productItem.setAttribute("href", `./edit-product.html#${item.id}`)
    productEl.appendChild(productItem)

    removeButton.textContent = "remove"
    productEl.appendChild(removeButton)
    removeButton.addEventListener("click", function(){
        removeProduct(item.id)
        saveProducts(products)
        renderProducts(products, filters)
    })

    return productEl
}

// --- saveProducts() ---
const saveProducts = function(products){
    localStorage.setItem("products", JSON.stringify(products))
}

// --- removeProduct() ---
const removeProduct = function(id){   // kollan objecte mahsul ro hazf mikone.
    const productIndex = products.findIndex(function(item){
        return item.id === id   // dar in halat return true kon.
    })
    if(productIndex > -1){   // zamani ke mojud bud.
        products.splice(productIndex, 1)
    }
}

// --- toggleProduct() ---
const toggleProduct = function(id){
    const product = products.find(function(item){   // "product" array hast.
        return item.id === id   // peyda nakone "undefined" barmigardune.
    })
    if(product !== undefined){   // yani age ba un id peyda shod...
        product.exist = !product.exist   // ?
    }
}

// --- lastEditMessage() ---
const lastEditMessage = function(timestamp){
    return `Last edit: ${moment(timestamp).locale("fa").fromNow()}`
}

// --- sortProducts() ---
const sortProducts = function(products, sortBy){
    if(sortBy === "byEdited"){
        return products.sort(function(a, b){
            if(a.updated > b.updated){
                return -1
            }else if(a.updated < b.updated){
                return 1
            }else{
                return 0
            }
        })
    }else if(sortBy === "byCreated"){
        return products.sort(function(a, b){
            if(a.created > b.created){
                return -1
            }else if(a.created < b.created){
                return 1
            }else{
                return 0
            }
        })
    }
    else{
        return products
    }
}
