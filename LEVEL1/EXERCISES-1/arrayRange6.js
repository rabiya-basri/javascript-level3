/*Generate array by range
JS function to generate an array between two integer og 1 step length
INPUT : rangeBetween(4,7)
OUTPUT:[4,5,6,7]
 */
function arrayRange(n,m) {
    let result = []
    for (let i = n; i <= m; i++){
        result.push(i)
    }
    return result
}
console.log(arrayRange(4, 7))
console.log(arrayRange(-4,7))