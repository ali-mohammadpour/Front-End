document.querySelector("#add-product").addEventListener("click", function(e){   // farghesh ba "document.getElementById()" chiye?
    console.log("Product created.")
})

document.querySelector("#remove-all-products").addEventListener("click", function(e){
    document.querySelectorAll(".product").forEach(function(item){   // array hast.
        item.remove()
    })
})
