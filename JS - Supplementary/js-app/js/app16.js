const productItems = [
    {
        title: "Book1",
        price: 29
    },
    {
        title: "Book2",
        price: 59
    },
    {
        title: "Book3",
        price: 79
    },
    {
        title: "Book4",
        price: 99
    }
]

const deleteProduct = function(array, product){
    let indexDel = array.findIndex(function(item){   // "item" khuneyi az array hast.
        return product.toLowerCase() === item.title.toLowerCase()   // "item" ro barmigardune.
    })
    if(indexDel > -1){
        productItems.splice(indexDel, 1)
    }else{
        console.log("Product not found!")
    }
}

deleteProduct(productItems, "book3")
console.log(productItems)
