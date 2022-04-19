/*RANDOM ELEMENT */
function randomElements(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}
console.log(randomElements([10,20,30,40]))