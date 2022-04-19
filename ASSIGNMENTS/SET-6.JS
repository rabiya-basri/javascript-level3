/*1 */
function mergeStrings(a,b){
    const str1 = a.split('')
    const str2 = b.split('')
    let result = ''
    for (let i = 0; i < str1.length || i < str2.length; i++){
        if (i < str1.length)
        result+=str1[i]
        if (i < str2.length)
        result+=str2[i]
    }
    return result
}
console.log(mergeString('virat', 'kohli'))
/*2 */
function factorial(num){
    if (num === 0 || num === 1)
      return 1;
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
console.log(factorial(0))
console.log(factorial(4))

/*3 */
function sumArr(arr1,arr2){
    let result=[]
    for(let i=0;i<Math.max(arr1.length , arr2.length);i++){
      result.push((arr1[i] || 0)+(arr2[i] || 0))
    }
    return result
   }
console.log(sumArr([1,0,2,3,4],[3,5,6,7,8,13]))
/*4 */
var reverseVowels = function(s) {
    const newstr = s.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = [];
    for (let i = 0; i <s.length; i++) {
      if (vowels.includes(s[i])) { result.push(s[i]); }
    }
    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(newstr[i])) { newstr[i] = result.pop(); }
    }
    return newstr.join('');
  };
console.log(reverseVowels('hello'))
  /*5
   */
  function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
      var c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
  }
  console.log(firstNonRepeatedCharacter('abacddbec'))
  /*6 */
  function twins(arr){
    let result=null
     if(arr.length===0){
          return null
      }else{
        for(let i=0;i<arr.length;i++){
           for(let j=i+1;j<arr.length;j++){
              if(arr[i]===arr[j]){
                result=arr[i]
              }
            }
        }
    }
    return result
  }
  console.log(twins([4,1,6,1,5]))
  console.log(twins([]))
  console.log(twins([2,3,6,34,7,8,2]))
console.log(twins([3, 1, 4, 2, 5]))
/*7 */
function capital(arr){
  let count=0;
 let capWords = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 for (let i=0; i<arr.length; i++) {
   for (let j=0; j < arr[i].length; j++) {
     if (capWords.includes(arr[i][j])) {
         count ++;
         }
   }
  
 }
  return count;
}
console.log(capital(["AwesomE", "ThIngs", "hAppEning", "HerE"]))
console.log(capital(["hello", "world"]))
