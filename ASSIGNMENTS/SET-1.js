//1-Return the Sum of Two Numbers
function add(a, b) {
    let sum = 0
    return sum = a + b
}
console.log(add(3, 2))//5
console.log(add(-3, -6))//-9
console.log(add(7, 3))//10

//2-Convert Minutes into Seconds
function convert(a) {
    const result = Math.floor(a*60)
    return result
}
console.log(convert(5))//300
console.log(convert(3))//180
console.log(convert(2))//120

//3-Return the Next Number from the Integer Passed
function addition(a){
    return a+1
}
console.log(addition(0))//1
console.log(addition(9))//10
console.log(addition(-3))//-2

//4-Convert Hours into Seconds
function howManySeconds(a){
    const result = Math.floor(a * 3600)
    return result
}
console.log(howManySeconds(2))//7200
console.log(howManySeconds(10))//36000
console.log(howManySeconds(24))//86400

//5-Return the First Element in an Array
function getFirstValue(a){
    return a[0]
}
console.log(getFirstValue([1, 2, 3]))//1
console.log(getFirstValue([80, 5, 100]))//80

//6-Is the String Empty?
function isEmpty(a){
    const result = false
    if (a.length === 0) {
    return true
    }
return result
}
console.log(isEmpty(""))//true
console.log(isEmpty(" "))//false
console.log(isEmpty("a"))//false

//7-Less Than 100?
function lessThan100(a,b){
    let result=false
        const sum = a + b
        if (sum < 100) {
            result=true
        }
    return result
}
console.log(lessThan100(22, 15))//true
console.log(lessThan100(83, 34))//false
console.log(lessThan100(3, 77))//true

//8-JavaScript Level 1 - SET 1
function and(a, b) {
    let result=false
    if ((a === true) && (b === true)) {
    result=true
    }
return result
}
console.log(and(true, false))//false
console.log(and(true, true))//true
console.log(and(false, true))//false
console.log(and(false, false))//false

//9-Area of a Triangle
function area(a,b){
    const result = (a * b) / 2
    return result
}
console.log(triArea(3, 2))//3
console.log(triArea(7, 4))//14
console.log(triArea(10, 10))//50

//10-Return Something to Me!
function giveMeSomething(a){
    const result = `something ${a}`
    return result
}
console.log(giveMeSomething("is better than nothing"))//"something is better than nothing"
console.log(giveMeSomething("Bob Jane"))//"something Bob Jane"

//11-Football Points
function footballPoints(a,b,c){
    const wins = 3, draws = 1, losses = 0
    const result = a * wins + b * draws + c * losses
    return result
}
console.log(footballPoints(3, 4, 2))//13
console.log(footballPoints(5, 0, 2))//15
console.log(footballPoints(0, 0, 1))//0

//12-The Farm Problem
function animals(a,b,c){
    const chickens = 2, cows = 4, pigs = 4
    const result = a * chickens + b * cows + c * pigs
    return result
}
console.log(animals(2, 3, 5))//36
console.log(animals(1, 2, 3))//22
console.log(animals(5, 2, 8))//50

//13-Equality Check
function checkEquality(a,b){
    let result = false
    if (typeof (a) === typeof (b)) {
        result=true
    }
    return result
}
console.log(checkEquality(1, true))//false
console.log(checkEquality(0, "0"))//false
console.log(checkEquality(1, 1))//true

//14-Correct the Mistakes
function squared(a){
    return a * a
}
console.log(2)//4




