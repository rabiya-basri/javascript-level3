/*COUNT THE DIGITS
write the js function to count the digits of an integer
INPUT: countDigits(1947)
OUTPUT:21 */
function countDigits(num) {
    let result = 0
    num = String(num)
    for (let i = 0; i < num.length; i++){
        result += parseInt(num[i])
    }
    return result
}
console.log(countDigits(1947))
console.log(countDigits(800900))