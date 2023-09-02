const paragraphs = document.querySelectorAll("p")

paragraphs.forEach(function(item){
    if(item.textContent.includes("JS")){
        item.remove()
    }
})
