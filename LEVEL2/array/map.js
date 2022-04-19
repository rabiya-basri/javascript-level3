const num=[10,15,20,25]
const res=num.map(function(ele){
  return ele+2
})
console.log(res)

//even-2 odd-3
const res1=num.map(function(ele){
  if(ele%2===0){
    return ele+2
  }else{
    return ele+3
  }
})
console.log(res1)

//even-2
const res2=num.map(function(ele){
  if(ele%2===0){
    return ele+2
  }else{
    return ele
  }
})
console.log(res2)

//return array of Object
const fruits=['apple','mango','kiwi']
const result=fruits.map(function(ele){
  return {
    [ele]: ele.length
  }
})
console.log(result)
