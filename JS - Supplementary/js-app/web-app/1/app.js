// const p = document.querySelector("p")
// console.log(p)

// p.remove()

const ps = document.querySelectorAll("p")

ps.forEach(function(item){   // item khunehaye array hastan. migim baraye tamame element haye array ye kari ro anjam bede.
    // item.remove()
    // console.log(item.textContent)   // item shomarande ma hast.
    item.textContent = "Update p"
})
