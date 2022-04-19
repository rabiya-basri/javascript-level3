//1.Sum the Digits
function sum(num){
    let result=0
    const str=num.toString()
    for(i=0;i<str.length;i++){
      result+=parseInt(str[i])
    }
    return result
  }
console.log(sum(414))
console.log(sum(2913))
//2.Count Up then Down
function count(num){
    let result=[]
    for(let i=0;i<=num;i++){
      result.push(i)
    }
    for(let i=num-1;i>=0;i--){
      result.push(i)
    }
    return result
  }
console.log(count(2))
 //3.
 function authenticate(arr,password){
    let isAuth=false
    for(let i=0;i<arr.length;i++){
      if(arr[i]===password){
        isAuth=true
        break
      }
    }
    if(isAuth){
      return 'authenticated'
    }else{
      return 'not authenticated'
    }
  }
  const passwords=['Password123',
    'dct@academy',
    'qwerty',
    'secret123',
    'gopro123',
    'harryp@tter']
console.log(authenticate(passwords, 'Password123'))
//4.Find Even or Odd
function even(num){
    if(num%2===0){
      return 'even'
    }else{
      return 'odd'
    }
  }
console.log(even(10))
console.log(even(11))
//5.Grasshopper - Summation
function summ(num){
    let result=0
    for(let i=0;i<=num;i++){
      result+=i
    }
    return result
  }
console.log(summ(2))
console.log(summ(8))
//6.Sum positive Numbers
function sum(arr){
    let result=0
    for(let i=0;i<arr.length;i++){
      if(arr[i]>=0){
        result+=arr[i]
      }
    }
    return result
  }
console.log(sum([1,-4,7,12]))
console.log(sum([]))
//7.Fizz Buzz
function fizz(num){
    let result=' '
    if((num%3===0) && (num%5==0)){
      result = 'FizzBuzz'
    }else if(num%3===0){
      result = 'Fizz'
    }
    else if(num%5===0){
      result = 'Buzz'
    }
  return result
  }
console.log(fizz(6))
console.log(fizz(10))
console.log(fizz(15))
console.log(fizz(7))
//8.String Count
function strCount(a,b){
    let count = 0
    for (let i = 0; i < a.length; i++){
        if (a[i] === b) {
            count+=1
        }
    }
    return count
}
console.log(strCount('hello', 'o'))
//9.Simple Multiplication
function mul(n){
    let result=0
    if(n%2===0){
      result=n*8
    }else{
      result=n*9
    }
    return result
  }
console.log(mul(2))
console.log(mul(3))
//10.The Array Cafe
function table(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
      if(arr[i].includes('not booked')){
        result.push(i)
      }
    }
    return result
  }
console.log(table(["not booked", "booked", "booked", "not booked", "not booked"]))
console.log(table(['booked','booked']))