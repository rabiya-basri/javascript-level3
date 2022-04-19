//Create a function that returns the index of the first vowel in a string.
function firstVowels(str){
    let result
    const vowels=['a','e','i','o','u','A','E','I','O','U']
    const newstr=str.split('')
    for(let i=0;i<newstr.length;i++){
      if(vowels.includes(newstr[i])){
        result=i
        break
      }
    }
    return result
  }
  console.log(firstVowels("apple"))
  console.log(firstVowels("hello"))
console.log(firstVowels("STRAWBERRY"))
  
//
function tuckin(arr1,arr2){
    let a = [arr1.shift()];
   let b = [arr1.pop()];
   for (let i = 0; i < arr2.length; i++) {
     arr1.push(arr2[i]);
   }
   arr1.push(b[0]);
   for (let j = 0; j < arr1.length; j++) {
     a.push(arr1[j]);
   }
   return a
 }
 console.log(tuckin([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))
console.log(tuckin([15, 150], [45, 75, 35]))
 
//What's Hiding Amongst the Crowd?
function crowd(str){
  let result=''
  for(let i=0;i<str.length;i++){
    if(str[i]===str[i].toLowerCase()){
      result+=str[i]
    }
  }
  return result
}
console.log(crowd('bEEFGBuFBRrHgUHlNFYaYr'))
console.log(crowd('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment'))
//remove duplicate elements
function duplicate(arr){
  let uniqueChars = arr.filter((c, index) => {
    return arr.indexOf(c) === index;
});
return uniqueChars
}
console.log(duplicate([1, 3, 3, 5, 5, 5]))
//phonenumber format
function phone(arr){
  let first=''
  let second=''
  let third=''
  let newArr=arr.join('')
  for(let i=0;i<newArr.length;i++){
    if(i<=2){
      first+=newArr[i]
    }else if(i<=5){
      second+=newArr[i]
    }else if(i<=9){
      third+=newArr[i]
    }
  }
  const result=`(${first}) ${second}-${third}`
  return result
}
console.log(phone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(phone([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]))
//zipcode
function zipcode(str){
  const alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
                'o','p','q','r','s','t','u','v','w','x','y','z']
  let result=true
  if(str.length>6){
    result=false
  }else {
    for(let i=0;i<str.length;i++){
      if(alpha.includes(str[i])){
          result=false
        }else if(str[i].includes(' ')){
          result=false
        }
    }
  }
    
  return result
}
console.log(zipcode("560001"))
console.log(zipcode('3939393'))
console.log(zipcode('732 325'))
console.log(zipcode('853a7c'))