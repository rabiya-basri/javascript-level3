/*REPEAT STRING
JS function to repeat a string a specified time
Ex: INPUT: repeatString('a',4)
    OUTPUT: aaaa */
function repeatString(str,num) {
    let result = ''
    for (let i = 1; i <= num; i++){
        result += str
    }
    if (num === undefined) {
        console.log('error in string count')
    }
    return result
}
console.log(repeatString('a', 4))
console.log(repeatString('a'))