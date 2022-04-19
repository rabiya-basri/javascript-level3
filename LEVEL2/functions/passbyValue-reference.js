//pass by value
const number = 2
function changeNumber(number) {
    number += 5
    return number
}
console.log(changeNumber(number))
console.log(number)
//pass by reference
const person = { name: 'rabi', city: 'hubly' }
function changeCity(personObj) {
    personObj.city = 'mysore'
    return personObj
}
console.log(changeCity(person))
console.log(person)