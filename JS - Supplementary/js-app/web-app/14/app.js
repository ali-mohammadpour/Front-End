let products = getSavedProducts()

const filters = {
    searchItem: "",
    availableProducts: false,   // chera nemishe avalesh khali bashe?
    sortBy: "byEdited"
}

renderProducts(products, filters)   // ejraye filter(sort) va nomayeshe products.

document.querySelector("#add-product-form").addEventListener("submit", function(event){   // baraye zakhire dade az submit estefade mikonim.
    event.preventDefault()
    const timestamp = moment().valueOf()   // mikhaym adad ro moghayese konim.
    products.push({   // zakhire dar araye roote "products".
        id: uuidv4(),
        title: event.target.elements.productTitle.value,
        price: "",
        exist: true,
        created: timestamp,
        updated: timestamp
    })
    saveProducts(products)   // zakhire dar local storage.
    renderProducts(products, filters)
    event.target.elements.productTitle.value = ""   // baraye khali kardane boxe input.
})

document.querySelector("#search-products").addEventListener("input", function(event){
    filters.searchItem = event.target.value   // daryafte inpute search
    renderProducts(products, filters)
})

document.querySelector("#available-products").addEventListener("change", function(event){
    filters.availableProducts = event.target.checked
    renderProducts(products, filters)
})

window.addEventListener("storage", function(e){   // baraye safe index.html
    if(e.key === "products"){
        products = JSON.parse(e.newValue)
        renderProducts(products, filters)
    }
})

document.querySelector("#sort").addEventListener("change", function(e){
    filters.sortBy = e.target.value
    renderProducts(products, filters)
})

/*
const now = new Date()   // bar asase tarikhe browser kar mikone.

console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minutes: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`)

const timestamp = now.getTime()
const myDate = new Date(timestamp)
console.log(`Year: ${myDate.getFullYear()}`)

// estefade az ketabkhane momentjs az site momentjs.com
const now = moment()

now.add(1, "year").subtract(2, "days")
console.log(now.toString())

console.log(now.format("MMMM Do, YYYY"))

// estefade az jalali
const now = moment()
now.locale("fa")
console.log(now.format("MMMM Do YYYY, h:mm:ss a"))
*/
