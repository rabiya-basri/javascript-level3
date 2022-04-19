function User(fname,lname){
    this.firstName=fname
    this.lastName=lname
    this.admin=false
    this.fullName=function(){
      return `${this.firstName} ${this.lastName}`
    }
    this.details=function(){
      return `${this.firstName} - admin(${this.admin})`
    }
  }
  const user1=new User('rabiya','basri')
  const user2=new User('sam','d')
  console.log(user1)
  console.log(user1.fullName())
  console.log(user1.details())
  console.log(user2)
  console.log(user2.fullName())
  console.log(user2.details())