/*ASSIGNMENT-1-Append to string
Write a function called appendToString, which accepts two strings.
The function should return a new string which consists of the
second string appended to the first string.
Examples:
appendToString("Hello", " World!"); // "Hello World!"
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test"
 */
function append(str1,str2){
    const result=str1.concat(str2)
    return result
}
console.log(append('hello',' world'))
console.log(append('hello world',''))

/*ASSIGNMENT-2 
find minimum number in an array without using built in function
Write a function called min, which accepts an array of numbers and returns the lowest value.
Do note use the built-in Math.min() function!
Examples:
min([5, 1, 4, 7, 1, 2]); // 1
min([-1, 6, 3, 2.2, -10, -4]); // -10
*/
function min(arr){
    let smallest = arr[0];
     for (let i=0; i<arr.length; i++){
       if (arr[i]<smallest){
           smallest = arr[i];
       }
   }
   return smallest;
}
console.log(min([5, 1, 4, 7, 1, 2]))//1
console.log(min([-1, 6, 3, 2.2, -10, -4]))//-10

/*ASSIGNMENT-3 
Square even numbers and return sum of squared
Write a function called squareEvenNumbers which 
accepts an array and returns the sum of all of the even numbers in the array squared.
*/
function square(arr){
    let res=0
    for(let i=0;i<arr.length-1;i++){
      if(arr[i]%2===0){
       res+=arr[i]*arr[i]
      }
    }
    return res
}
console.log(square([1, 2, 3, 4, 5]))//20
console.log(square([1, 3, 5, 7]))//0
console.log(square([5, 6, 7]))//36

/*ASSIGNMENT-4 String Includes
Write a function called stringIncludes, which accepts two strings: 
the first string is a word and the second string is a single character. 

The function should return true if the first string 
includes the character, otherwise it should return false.
Do not use the built in String.includes() function!
*/
function string(str,char){
    let result=false
    for(let i=0;i<str.length;i++){
      if(str[i]===char){
        return true
      }
    }
    return result
}
console.log(string('awesome','e'))//true
console.log(string('awesome', 'z'))//false

/*ASSIGNMENT-5  Repeat the string number of times
Write a function called repeat, which accepts a 
string and a number and returns a new string with 
the string repeated that number of times.
*/
function repeat(str,num){
    let result=''
    for(let i=0;i<num;i++){
      result+=str
    }
    return result
}
console.log(repeat('matt',3))
console.log(repeat('Elie', 2))
console.log(repeat('Michael', 0))

/*ASSIGNMENT-6 object to array of elements
Write a function called entries, which accepts an object and returns an array 
of arrays of key-value pairs.

In other words, each sub-array is an "entry" in the object with two elements: 
the first element is the key, and the second element is the value.

Do not use the built in Object.entries() function!
*/
function entries(obj){
    let res=Object.keys(obj).map(function(key){
      return [(key), obj[key]];
    })
    return res
}
console.log(entries({ a: 1, b: 2, c: 3 }))//[['a',1]['b',2]['c',3]]

/*ASSIGNMENT -7
Write a function called threeOddNumbers, which accepts an array of 
numbers and returns true if any three consecutive numbers sum to an odd number.
*/
function threeOddNumbers(a){
  let result = false
  for (let i = 0; i < a.length-2; i++){
      if ((a[i] + a[i + 1] + a[i + 2]) % 2 !== 0) {
          result=true
          break
      }
  }
  return result
}
console.log(threeOddNumbers([1, 2, 3, 4, 5]))//true
console.log(threeOddNumbers([1,2,3,3,2]))//false

//ASSIGNMENT-8
/* Given a string of words, your goal is to find the highest scoring 
word in the string. a is worth 1 point, b is worth 2 points, c is worth 3 points, 
and so on, all the way up until z, which is worth 26 points. You can assume that 
strings will consist only of lowercase letters and spaces.

In the event that two words have the same score, return the word that appears 
first in the string.
*/
function string(str){
  const alphabets='abcdefghijklmnopqrstuvwxyz'
    let bestWord = "";
    let bestScore = 0;
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      let score = 0;
      const word = words[i];
      for (let j = 0; j < word.length; j++) {
        const char = word[j];
        score += (alphabets.indexOf(char) + 1);
      }
      if (score > bestScore) {
        bestScore = score;
        bestWord = word;
      }
    }
    return bestWord;
}
console.log(string("a b c d e f"))//f
console.log(string("hello world"))//world
console.log(string("go ahead make my day"))//my
console.log(string("there is no place like home"))//there
console.log(string("aaaaaa bbb cc f"))//aaaaaaaa
console.log(string("this sentence has two highest scoring words"))//sentence

/*ASSIGNMENT-9
Create a function isAlt that accepts a string as an argument and validates 
whether the vowels (a, e, i, o, u) and consonants are in alternate order.
*/
function isAlt(str) {

  let vowels = ["a", "e", "o", "i", "u"];
  for(i = 0; i < str.length-1; i++) {
      if(vowels.indexOf(str[i]) >= 0 && vowels.indexOf(str[i+1])>=0)
                  return false;
      else if(vowels.indexOf(str[i]) === -1 && vowels.indexOf(str[i+1])===-1)
              return false;
     }
    return true;
}
console.log(isAlt("amazon"))//t
console.log(isAlt("apple"))//f
console.log(isAlt("banana"))//t

/*ASSIGNMENT-10
Given an array of unique numbers, return a new array of rankings of the original array. 
For example, if your input array is [10, 5, 20], the output should be [2, 3, 1],
 since 10 is the second largest number, 5 is the third largest, and 20 is the largest.
*/
function highest(arr){
  const sortArr=[...arr].sort((a,b)=> b-a)
  return arr.map((ele)=>sortArr.indexOf(ele)+1)
}
console.log(highest([10, 5, 20]))//[ 2, 3, 1 ]