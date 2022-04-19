const calculator={
    result:0,
    add:function(n=0){
    return  this.result+=n
    },
    minus:function(n=0){
      return this.result-=n
    },
    multi:function(n=1){
      return this.result*=n
    },
    div:function(n=1){
      return this.result/=n
    },
    reset:function(){
      return this.result=0
    }
  }
  console.log(calculator.add(5))
  console.log(calculator.add(10))
  console.log(calculator.minus(3))
  console.log(calculator.multi(2))
  console.log(calculator.div(8))
  console.log(calculator.reset())