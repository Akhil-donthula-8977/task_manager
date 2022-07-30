//this index.js is the starting file for our app.

// const User=require('./models/user.js')
const express = require('express');
require('./db/mongoose.js')
const User = require('./models/user.js')
const Task = require('./models/tasks.js')
const bcrypt=require('bcrypt')//methods are hash(_,_),comapre(_,_)
const app = express();
const userRouter = require('../src/router/users.js')
const taskRouter = require('../src/router/taskroute.js')
//const taskRouter
app.use(userRouter)
app.use(taskRouter)


app.use(express.json())//important to pass the incoming request json data
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send("hello")
})


app.listen(port, () => {
    console.log('this app is running');
})