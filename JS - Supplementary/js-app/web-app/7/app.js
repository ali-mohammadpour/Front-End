document.querySelector("#add-product-form").addEventListener("submit", function(e){
    e.preventDefault()
    let res = e.target.elements.productTitle.value   // "value" un chizi hast ke dakhele input vared shode.
    console.log(res)
    e.target.elements.productTitle.value = ""
})
