// const { use } = require('express/lib/application');
//const { save } = require('mongodb/lib/operations/collection_ops');
const bcrypt=require('bcrypt')
const mongoose=require('mongoose');
const validatior=require('validator');
const {Schema}=mongoose;
const userSchema=new Schema({
    name:{
          type:String,
        //   required:true
    },
    age:{
      
       type:Number,
       validate(value){
        if(value<=0){
            throw new error("not valid")
        }
    }
    },
    phonenumber:{
        type:Number,  
       
    },
    email:{
        type:String,
        trim:true,
        validate(value){
            if(!validatior.isEmail(value)){
                throw new error("error in email")
            }
        }
    },
    password:{
        type:String,
        required:false,
        minlength:6,
        trim:true,
        validate(value){
            if(value=="password"){
                throw new error("password shouldn't be password")
            }
        }
    }
  
})
userSchema.pre('save',function (next){
    const user=this
    console.log("updtaed")
    next()
})
// userSchema.pre('save',async function (next){
//     //arrow fuctions dont bind with this
//     const user=this
//     console.log("user schema")
//     next()
//     //if we dont call next() then it will think like still we r running some code before we save user


// })
const User=mongoose.model('User',userSchema)


module.exports=User;