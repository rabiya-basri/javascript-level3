/*STRING FROM OBJECT
JS function that generates a string from an object key/value pair
FORMAT: 'key=value, kay=value' */
function stringFromObj(obj) {
    let result = []
    for (const key in obj) {
        const str = `${key} = ${obj[key]}`
        result.push(str)
    }
    return result.join(", ")
}
console.log(stringFromObj({a:1, b:2}))