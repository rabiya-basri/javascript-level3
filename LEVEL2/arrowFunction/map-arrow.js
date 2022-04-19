const products = [
    { id: 1, name: 'marker', price: 120 },
    { id: 2, name: 'pen', price: 20 }
]
//using filter()
const result = products.map(function (product) {
    return product.name
})
console.log(result)
//using arrow filter
const result2 = products.map((product) => {
    return product.name
})
console.log(result2)