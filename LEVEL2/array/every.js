//return bollean value based on the condition
//TRUE - all the condition is true
//FALSE - anyone condition is fails and break out of the loop
const price=[125,175,200,250]
const result=price.every(function(ele){
  return ele>100
})
console.log(result)