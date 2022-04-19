/*Count the number of vowles
JS function that accepts a string and count the number
of vowels in the string
INPUT: countVowels('The Quick Brown Fox')
OUTPUT: 5 */
function countVowels(str) {
    let count = 0
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count += 1
        }
    }
    return count
}
console.log(countVowels('the QUick Brown Fox'))
console.log(countVowels('Java Script is awesome'))