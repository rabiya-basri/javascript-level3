/*Count sub string
JS function to find the occurance of a substring in a given string
EX: INPUT: countSub('The quick brown fox jump overa lazy dog','the')
OUTPUT: 2 */
function countSub(str1,str2) {
    let Count = 0
    str1 = str1.toLowerCase()
   let words = str1.split(" ")
    for (let i = 0; i < words.length; i++){
        if (words[i] === str2) {
            Count += 1
        }
    }
    return Count
}
console.log(countSub('The quick brown fox jump over the lazy dog', 'the'))
console.log(countSub('The quick brown fox jump over the lazy dog','dog'))