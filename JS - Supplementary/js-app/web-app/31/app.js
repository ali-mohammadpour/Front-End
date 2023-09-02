const checkOut = (...price) => {
    let sum = 0
    price.forEach(item => sum += item)
    return sum
}

console.log(checkOut(29, 59, 30, 50))
