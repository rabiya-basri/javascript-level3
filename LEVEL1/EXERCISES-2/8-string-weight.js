/*weight of string */
function stringWeight(str1,str2) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let str1Weight = 0, str2Weight = 0, result
    for (let i = 0; i < str1.length; i++){
        str1Weight += alphabets.indexOf(str1[i]) + 1
    }
    for (let j = 0; j < str2.length; j++){
        str2Weight += alphabets.indexOf(str2[j]) + 1
    }
    if (str1Weight > str2Weight) {
        result=1
    } else if (str2Weight > str1Weight) {
        result = 2
    } else {
        result='equal'
    }
    return result
}
console.log(stringWeight('batman', 'superman'))
console.log(stringWeight('batman', 'manbat'))
console.log(stringWeight('batmansupyu','superman'))