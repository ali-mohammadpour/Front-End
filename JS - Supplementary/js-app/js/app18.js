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

const sortProducts = function(array){
    array.sort(function(a, b){   // functione mahali esm nadarad.
        if(a.exist === true && b.exist === false){   // if "a" is less than "b" by some ordering criterion.
            return -1
        }else if(a.exist === false && b.exist === true){   // if "a" is greater than "b" by the ordering criterion.
            return 1
        }else if((a.exist === true && b.exist === true) || (a.exist === false && b.exist === false)){   // "a" must be equal to "b".
            return 0
        }
    })
}

sortProducts(productItems)
console.log(productItems)
