const productItems = [
    {
        title: "Book1",
        exist: true
    },
    {
        title: "Book2",
        exist: false
    },
    {
        title: "Book3",
        exist: true
    },
    {
        title: "Book4",
        exist: false
    }
]

const productNotExist = function(array){
    return array.filter(function(item){   // methode filter ruye tamame element haye array emal mishe.
        return !item.exist   // item.exist === false
    })
}

let result = productNotExist(productItems)

console.log(result)
