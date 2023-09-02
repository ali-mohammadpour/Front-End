// --- getSavedProducts() ---
const getSavedProducts = () => {
    const productsJSON = localStorage.getItem("products")
    try{
        return productsJSON !== null ? JSON.parse(productsJSON) : []
    }catch(e){
        return []
    }
}

// --- renderProducts() ---
const renderProducts = (products, filters) => {
    products = sortProducts(products, filters.sortBy)

    let filteredProducts = products.filter((item) => {   // araye "filteredProducts" baraye search.
        return item.title.toLowerCase().includes(filters.searchItem.toLowerCase())
    })

    filteredProducts = filteredProducts.filter((item) => {   // araye "filteredProducts" baraye mojudi.
        if(filters.availableProducts){
            return item.exist
        }else{
            return true   // chera nemishe else ro khali gozasht?
        }
    })

    document.querySelector("#products").innerHTML = ""

    filteredProducts.forEach((item) => {
        document.querySelector("#products").appendChild(createProductDOM(item))
    })
}

// --- createProductDOM() ---
const createProductDOM = (item) => {
    const productEl = document.createElement("div")   // root dar inja.
    const checkbox = document.createElement("input")
    const productItem = document.createElement("a")
    const removeButton = document.createElement("button")
    const productPrice = document.createElement("p")

    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = !item.exist   // dar surate adame mojudi checkbox tik bokhore.
    productEl.appendChild(checkbox)
    checkbox.addEventListener("change", () => {
        toggleProduct(item.id)
        saveProducts(products)   // zakhire dar local storage.
        renderProducts(products, filters)   // nomayesh
    })

    productItem.textContent = item.title
    productItem.setAttribute("href", `./edit-product.html#${item.id}`)
    productEl.appendChild(productItem)

    productPrice.textContent = item.price
    productEl.appendChild(productPrice)

    removeButton.textContent = "حذف"
    productEl.appendChild(removeButton)
    removeButton.addEventListener("click", () => {
        removeProduct(item.id)
        saveProducts(products)
        renderProducts(products, filters)
    })

    productEl.setAttribute("class", "product-row")

    return productEl
}

// --- saveProducts() ---
const saveProducts = products => localStorage.setItem("products", JSON.stringify(products))

// --- removeProduct() ---
const removeProduct = (id) => {   // kollan objecte mahsul ro hazf mikone.
    const productIndex = products.findIndex(item => item.id === id)   // dar in halat return true kon.
    if(productIndex > -1){   // zamani ke mojud bud.
        products.splice(productIndex, 1)
    }
}

// --- toggleProduct() ---
const toggleProduct = (id) => {
    const product = products.find((item) => {   // "product" array hast.
        return item.id === id   // peyda nakone "undefined" barmigardune.
    })
    if(product !== undefined){   // yani age ba un id peyda shod...
        product.exist = !product.exist   // ?
    }
}

// --- lastEditMessage() ---
const lastEditMessage = (timestamp) => {return `آخرین ویرایش: ${moment(timestamp).locale("fa").fromNow()}`}

// --- sortProducts() ---
const sortProducts = (products, sortBy) => {
    if(sortBy === "byEdited"){
        return products.sort((a, b) => {
            if(a.updated > b.updated){
                return -1
            }else if(a.updated < b.updated){
                return 1
            }else{
                return 0
            }
        })
    }else if(sortBy === "byCreated"){
        return products.sort((a, b) => {
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
