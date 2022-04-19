const products = [
    { id: 1, name: 'marker', price: 120 },
    { id: 2, name: 'pen', price: 20 }
]
//using filter()
const result = products.filter(function (product) {
    return product.price <= 100
})
console.log(result)
//using arrow filter
const result2 = products.filter((product) => {
    return product.price >= 100
})
console.log(result2)