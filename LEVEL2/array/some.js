//return boolen if anyone element satisfy the cond and breaks out of the function
const num = [5, 15, 20, 25, 35]
const result = num.some(function(ele){
  return ele%2===0
})
console.log(result)