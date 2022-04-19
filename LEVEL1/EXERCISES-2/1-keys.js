/*find the keys without built in function */
function keys(obj) {
    let array = []
    for (const key in obj) {
        array.push(key)
    }
    return array
}
const object = { d: 1, c: 2, t: 3 }
const object2 = { first: 'matt', last: 'lane' }
const object3 = {}

console.log(keys(object))
console.log(keys(object2))
console.log(keys(object3))