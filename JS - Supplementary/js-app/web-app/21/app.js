/*
const fullName = "Ali Mohammadpour"
const parts = fullName.split(" ")   // har ja space didi split kon.
console.log(parts)
*/

const product = {
    title: "Book",
    price: 80,
    get productInfo(){   // "get" tabe asli ma ke ye kario bara ma anjam mide.
        return `Title: ${this.title} - Price: ${this.price}`
    },
    set productInfo(value){   // "set" har bar farakhani beshe mitune kare jadidi ro anjam bede.
        const parts = value.split(" ")
        this.title = parts[0]
        this.price = parts[1]
    }
}

product.productInfo = "Book2 59"   // maghadire object avaz shod.

console.log(product.productInfo)   // be shekle "reference" farakhani mikonim.
