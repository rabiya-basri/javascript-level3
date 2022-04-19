/*Count Up Then down 
JS function that takes number and retuen array
Example: INPUT: countUpThenDown(2)
         OUTPUT:[0,1,2,1,0]*/

function countUpThenDown(n) {
    let result = []
    for (let i = 0; i <= n; i++){
        result.push(i)
    }
    for (let i = n - 1; i >= 0; i--){
        result.push(i)
    }
    return result
}
console.log(countUpThenDown(2))
console.log(countUpThenDown(0))