/*Super hero power
JS function to display the power of the given superhero
INPUT: superpower(superHeroes,'Molecule Man')
OUTPUT: 'radiation resistance, Twinning tiing, radiation Blast' */
const superHeroes = [{
    "name": "molecule man",
    "age": 29,
    "secretIdentity": "Dan Jokes",
    "powers": ['radiation resistance',
        'Twinning tiing',
        'radiation Blast']
}, {
    "name": "madame uppercut",
    "age": 39,
    "secretIdentity": "jane willson",
    "powers": ['million tone punch',
        'damage resistance',
        'superhuman reflexes']
}
]
function superPowers(array,name) {
    let result = ''
    for (let i = 0; i < array.length; i++){
        if (array[i].name === name) {
            result=array[i].powers.join(', ')
        }
    }
    return result
}
console.log(superPowers(superHeroes,'molecule man'))