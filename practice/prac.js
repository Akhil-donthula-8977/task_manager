// var msg='hey';
// const func=(msgs,hello)=>{
//     hello(msg)
// }
// func(msg,(data)=>{
//     console.log(data);
// })
// var bool=true
// prom=new Promise((resolve,reject)=>{
//     if(bool){
//         resolve(3)
//     }
//     else{
//         reject(2)
//     }
// }).then((data)=>{console.log(data)})
// console.log("hate vennela")

//const async = require("hbs/lib/async");

require('../task-manager/src/db/mongoose.js')
const Task=require('../task-manager/src/models/tasks.js')
// Task.findByIdAndDelete('62c1728ede33663a4ba62d51').then((data)=>{
//     console.log(data)
//      return Task.countDocuments()
// }).then((count)=>{
//     console.log(count)
// })

const findAndDelete=async (id)=>{
    const Delete=await Task.findByIdAndDelete(id)
    const Count=await Task.countDocuments()
    return Count;
}
findAndDelete('62c172a6de33663a4ba62d53').then((count)=>{
    console.log(count)
})