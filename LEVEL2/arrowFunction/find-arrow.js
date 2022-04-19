const products = [
    { id: 1, name: 'marker', price: 120 },
    { id: 2, name: 'pen', price: 20 }
]
//using find()
const result = products.find(function (product) {
    return product.id == 1
})
console.log(result)
//using arrow function for find(callback)
const result2 = products.find((product) => {
    return product.id == 2
})
console.log(result2)
//shorter arrow function
const result3 = products.find(product => product.id == 1)
console.log(result3)
