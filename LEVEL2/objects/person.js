//accessing methods using this
const person={
    name:'rabiya',
    city:'bangalore',
    profession:'software developer',
    detaild:function(){
      return `${this.name} is working as a ${this.profession} in ${this.city}`
    }
  }
  console.log(person.detaild())
  /*increment/decrementing/reseting the value of count,
  updating properties of Object
  using methods
  */
  const counter={
    count:0,
    update:function(){
      return this.count+=1
    },
    down:function(){
      return this.count-=1
    },
    resetCount:function(){
      return this.count=0
    }
  }
  console.log(counter.update())
  console.log(counter.update())
  console.log(counter.down())
  console.log(counter.resetCount())
  
  