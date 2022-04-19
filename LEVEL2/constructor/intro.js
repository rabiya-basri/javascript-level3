//implementing constructor function
function User(fname, lname) {
    this.firstName=fname
    this.lastName=lname
  }
  const user1=new User('rabiya','basri')
  const user2=new User('sam','d')
  console.log(user1)
console.log(user2)
  
//creating methods
function User(fname,lname){
    this.firstName=fname
    this.lastName=lname
    this.fullName=function(){
      return `${this.firstName} ${this.lastName}`
    }
  }
  const user1=new User('rabiya','basri')
  const user2=new User('sam','d')
  console.log(user1)
  console.log(user1.fullName())
  console.log(user2)
  console.log(user2.fullName())
