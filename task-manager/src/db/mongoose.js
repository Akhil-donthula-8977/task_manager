const mongoose = require('mongoose');//task-manager-api is database mname
const validatior = require('validator'); //validator package which contains validations of email , credit card number etc
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { useNewUrlParser: true })



// user1.save().then(()=>{console.log(user1)})
// .catch((error)=>{console.log(error)})
//it saves in db and doesnt take any parameters and returns a promise
/*for validations mongoose doenst have that many built in validations so we use built in library called validations for 
  validations like email,creditcard number,etc.*/
