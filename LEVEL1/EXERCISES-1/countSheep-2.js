/*if you can't sleep  then count sheep 
Given a number, 3 for example, return a string with a murmur:
'1 sheep...2 sheep...3 sheep'*/
function countSheep(n) {
    let result = ''
    for (let i = 1; i <= n; i++){
        result += `${i} sheep...`
    }
    return result
}
console.log(countSheep(3))
console.log(countSheep(5))