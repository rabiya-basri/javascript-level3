/*JS program that iterates number from 1 to 100 
but for multiples of 3 pring'FIZZ' insted of 3
and for 5 prints 'BUZZ' and for multiples of
3 and 5 prints 'FIZZBUZZ'  */
function fIZZBUZZ() {
    for (let i = 1; i <= 100; i++){
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('FIZZBUZZ')
        } else if (i % 5 === 0) {
            console.log('BUZZ')
        } else if (i % 3 === 0) {
            console.log('FIZZ')
        } else {
            console.log(i)
        }
    }
}
fIZZBUZZ()