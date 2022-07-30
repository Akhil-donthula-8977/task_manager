const mongoose=require('mongoose');
const validatior=require('validator');


const Task=mongoose.model('Task',{
    name:{
        type:String,
        // required:true,
        trim:true
    },
    description:{
       type:String,
    //    required:true
    },
    completer:{
        type:Boolean,
        // required:true
    }

});

module.exports =Task