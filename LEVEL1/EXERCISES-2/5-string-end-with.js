/*String ends with suffix
JS function to check if string ends with suffix
INPUT: string('JS PHP PYTHON')
OUTPUT: TRUE
INPUT: string('JS PHP PYTHON',')')
OUTPUT: FALSE
 */
function stringEndsWith(str1,str2) {
    let result = false
    const words = str1.split(' ')
    const lastIndex = words.length - 1
    if (words[lastIndex] === str2) {
        result = true
    }
    return result
}
console.log(stringEndsWith('JS PHP PYTHON', 'PYTHON'))
console.log(stringEndsWith('JS PHP PYTHON','react'))