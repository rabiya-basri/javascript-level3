/*Chop a string
JS function to chop string chunck og a into given length*/
function chopStr(str,n) {
    const result = []
    for (let i = 0; i < str.length; i += n){
      const  substr = str.slice(i, i + n)
        result.push(substr)
    }
    return result
}
console.log(chopStr('reseorces',2))