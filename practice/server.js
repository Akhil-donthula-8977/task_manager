const express=require('express');
const path=require('path');
const app=express();
const hbs=require('hbs');
const weathercode=require('../utils/weathercode')
app.use(express.static(path.join(__dirname,'../static')))
weathercode('hyderabad',(error,data)=>{    // requresting data from the server from
  console.log(data.tempc);
})
const viewpath=path.join(__dirname,'../views');
app.set('view engine','hbs');
// app.set('views',viewpath)
app.get('/index',(req,res)=>{
    res.render('index')

})
app.get('/weather',(req,res)=>{
     if(!req.query.location){
         res.send("error!!")
     }
    else{
         
         weathercode(req.query.location,(error,data)=>{
          if(error){
             return res.send('error!')
          }
          
              res.send(data)
          
         })
        }
     
})
app.listen(3000,()=>{
    console.log('this app is listning')
})