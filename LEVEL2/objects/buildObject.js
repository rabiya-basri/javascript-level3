//convert array of string into object using for loop
function buildObject(arr){
    const result={}
    for(let i=0;i<arr.length;i++){
      result[arr[i]]=arr[i].length
    }
    return result
  }
console.log(buildObject(['apple', 'banana', 'kiwi', 'orange']))
  
//using forEach()
function buildObject(arr){
    const result={}
    arr.forEach(function(ele){
      result[ele]=ele.length
    })
    return result
  }
  console.log(buildObject(['apple','banana','kiwi','orange']))