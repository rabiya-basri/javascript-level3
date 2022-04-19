//7-every function without using built in function
function every(arr,callBack){
    let result=[]
    for(let i=0;i<arr.length;i++){
      result.push(callBack(arr[i]))//result=callBack(arr[i])
    }
    return !result.includes(false)//return result
  }
  console.log(every([1,2,3,4,5],function(ele){
    return ele > 0
  }))