//1
function match(arr){
    let sum1=0
    let sum2=0
    for(let i=0;i<(arr.length/2);i++){
      sum1+=arr[i]
    }
    for(let i=arr.length/2;i<arr.length;i++){
      sum2+=arr[i]
    }
   return Math.abs(sum1-sum2)
  }
console.log(match([1, 2, 1, 2, 1, 3]))
  //2
  function occurance(str1,str2)
{
  let count=0
  for(let i=0;i<str1.length;i++){
    if(str1[i].includes(str2)){
      count=count+1
    }
  }
  return count
}
console.log(occurance('dct academy', 'c'))
//3
var getMax = function (str) {
    let max = 0,
      maxChar = '';
     str.split('').forEach(function(char){
       if(str.split(char).length > max) {
           max = str.split(char).length;
           maxChar = char;
        }
     });
     return maxChar;
   };
console.log(getMax("aaaaaabbbccf"))
  //4
  function superPower(a,b){
    let result = 'invalid input'
    for (let i = 0; i < a.length; i++){
        if (a[i].name === b) {
            result=a[i].powers.join(', ')
        } 
    }
return result
}
var superHeroes = [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
console.log(superPower(superHeroes, 'Molecule Man'))
//5
function palindrome(a){
  let revStr = '', result = false
  if (a.length == 0) {
      return 'invalid input'
  } else {
      for (let i = a.length - 1; i >= 0; i--) {
          revStr += a[i]
      }
      if (revStr === a) {
          return true
      }
  }
  return result
}
console.log(palindrome('mam'))
//6
function sortArrayOfObjects(arr){
  let result=arr.sort((a, b) => {
  if (a.libraryID > b.libraryID) return -1
  return a.libraryID < b.libraryID ? 1 : 0
})
return result
}
var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
console.log(sortArrayOfObjects(library))
//7
function sortArrayOfObjects(arr){
  let result=arr.sort((a, b) => {
  if (a.title < b.title) return -1
  return a.title > b.title ? 1 : 0
})
return result
}
var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
console.log(sortArrayOfObjects(library))
//8
function array(arr1,arr2){
  let result = []
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr2[i] === arr1[j]) {
                result.push(arr2[i])
            }
        }
    }
    return result
}
console.log(array([21, 34, 41, 22, 35],[61, 34, 45, 21, 11]))

//9

