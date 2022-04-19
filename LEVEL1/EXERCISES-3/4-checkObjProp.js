/*CHECK OBJECT PROPERTY */
function objProperty(obj,str) {
    let result = false
    for (const key in obj) {
        if (key === str) {
            result = true
            break
        }
    }
    return result
}
console.log(objProperty({ name: 'raja', city: 'bangalore' }, 'city'))
console.log(objProperty({name:'raja',city:'bangalore'},'age'))