/*swap key value in an object */
function swapKeyAndValue(obj, str) {
    let result = {}
    for (const key in obj) {
        if (key === str) {
            result[obj[key]] = key
        } else {
            result[key]=obj[key]
        }   
    }
    return result
}
const instructors={name:'Elle',job:'instructor'}
console.log(swapKeyAndValue(instructors,'name'))