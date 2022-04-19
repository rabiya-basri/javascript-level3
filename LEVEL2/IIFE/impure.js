//impure function using splice() on method
const fruits = ['apple', 'banana', 'kiwi']
console.log(fruits.splice(0, 1))//[apple]
console.log(fruits.splice(0, 1))//[banana]
console.log(fruits.splice(0, 1))//kiwi
//on function
let players = []
function addElement(players,name) {
    players.push(name)
    return players
}
console.log(addElement(players, 'dhoni'))//[dhoni]
console.log(addElement(players,'dhoni'))//[dhoni,dhoni]
