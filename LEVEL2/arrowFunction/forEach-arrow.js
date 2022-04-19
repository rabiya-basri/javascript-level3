const persons = [{
    id:1,
    name: 'raj'
},
    {
        id: 2,
        name:'ramu'
    }]
//forEach method to traverse
persons.forEach(function (ele) {
    console.log(`${ele.name}-${ele.id}`)
})

//arrow function for forEach()
persons.forEach((person) => {
    console.log(`${person.name}-${person.id}`)
})