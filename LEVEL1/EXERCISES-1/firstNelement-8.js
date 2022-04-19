/*First n elements */
function firstnElement(arr,n) {
    let result
    if (n === undefined) {
        result=arr[0]
    } else if (n < 0) {
        result = arr.slice(0)
    } else {
        result = arr.slice(0, n)
    }
    return result
}
console.log(firstnElement([7, 2, 6, 5]))
console.log(firstnElement([], 3))
console.log(firstnElement([7, 2, 6, 5], -3))
console.log(firstnElement([7, 2, 6, 5],3))