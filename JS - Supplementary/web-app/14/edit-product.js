const titleElement = document.querySelector("#product-title")
const priceElement = document.querySelector("#product-price")
const removeElement = document.querySelector("#remove-product")
const dateElement = document.querySelector("#last-edit")

const productId = location.hash.substring(1)
let products = getSavedProducts()   // chon be app.js link nakardam.
let product = products.find(function(item){   // kole item ro barmigardune.
    return item.id === productId
})

if(product === undefined){
    location.assign("./index.html")
}

titleElement.value = product.title
priceElement.value = product.price
dateElement.textContent = lastEditMessage(product.updated)

titleElement.addEventListener("input", function(e){
    product.title = e.target.value   // beshe title ro avaz kard.
    product.updated = moment().valueOf()   // vaghti input vared konim, value "updated" update she.
    dateElement.textContent = lastEditMessage(product.updated)
    saveProducts(products)
})

priceElement.addEventListener("input", function(e){
    product.price = e.target.value
    product.updated = moment().valueOf()
    dateElement.textContent = lastEditMessage(product.updated)
    saveProducts(products)
})

removeElement.addEventListener("click", function(e){
    removeProduct(product.id)
    saveProducts(products)
    location.assign("./index.html")
})

window.addEventListener("storage", function(e){   // baraye tab haye mokhtalefe edit-product.html
    if(e.key === "products"){
        products = JSON.parse(e.newValue)   // tabdile string be object.

        product = products.find(function(item){
            return item.id === productId
        })

        if(product === undefined){
            location.assign("./index.html")
        }
        titleElement.value = product.title
        priceElement.value = product.price
        dateElement.textContent = lastEditMessage(product.updated)
    }
})
