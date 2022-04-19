const
 menuItem=[
   {id:1,name:'chicken kebab',price:290,isveg:false},
   {id:2,name:'paneer chilli',price:210,isveg:true},
   {id:3,name:'chicken briyani',price:350,isveg:false},
   {id:4,name:'veg briyani',price:300,isveg:true}
   ]
   //all veg
   const res1=menuItem.filter(function(ele){
     return ele.isveg===true
   })
   console.log(res1)
   
   //item whose price is 200-300
   const res2=menuItem.filter(function(ele){
     return ele.price>=200 && ele.price<=300
   })
   console.log(res2)
   
   //item is id is 3
   const res3=menuItem.find(function(ele){
     return ele.id===3
   })
   console.log(res3)
   
   //all item which hasterm briyani
   const res4=menuItem.filter(function(ele){
     return ele.name.includes('briyani')
   })
   console.log(res4)