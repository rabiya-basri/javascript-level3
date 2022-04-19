/*Finf the sum of array 
 Given an array of numbers find the sum of elements
 INPUT: sumArray([10,20,30])
 output: 60
*/
function arraySum(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}
console.log(arraySum([10, 20, 30]))
console.log(arraySum([]))