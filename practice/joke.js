// const request=require('request');

// const url='https://icanhazdadjoke.com/j/R7UfaahVfFd'
// fetch(url,{
//  headers:{
//      'Accept':'applicaion/json'
//  }
// }).then((response)=>{
//     response.json.then((data)=>{
//         console.log(data)
//     })
// })
//request({url:url,json:true},(err,res)=>{
//     console.log(res.body)
// })

// const mongoose=require('mongoose');



//app.json({})-method to send json to clint from server
//promise chaining
/*here instead of nesting functions we return function for every then 
so that it gets chained not nest*/
require('../task-manager/src/db/mongoose.js')
const User=require('../task-manager/src/models/user.js')
User.findByIdAndUpdate('62beadbf2cc3fdcb006abd8c',{password:'akhilrahul@123'}).then((user)=>{
    console.log(user)
    return User.countDocuments({name:'akhil'})
}).then((count)=>{
    console.log(count)
})

const findAndUpadte=async (id,age)=>{
   const user= await User.findByIdAndUpdate(id,{age:age})
   const count =await User.countDocuments()
   var update={user,count}
   return update

}

findAndUpadte('62c172a6de33663a4ba62d53',32).then((object)=>{
 console.log(object.count)
})