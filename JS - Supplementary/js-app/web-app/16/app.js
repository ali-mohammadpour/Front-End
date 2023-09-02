const product = {
    title: "Book",
    productName(){
        return `Product name: ${this.title}`
    }
}

console.log(product.productName())
