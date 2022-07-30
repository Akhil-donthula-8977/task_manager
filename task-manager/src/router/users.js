const User = require('../models/user.js')
const express = require('express')
const router = new express.Router()
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.send(user)
    }
    catch (e) {
        res.status(404).send(e)
    }
})
router.get('/users', async (req, res) => {

    try {
        const data = await User.find({})
        res.send(data)
    } catch (e) {
        res.status(404).send(e)
    }
})
router.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        data = await User.findById(id)
        res.send(data)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.patch('/users/:id', async (req, res) => {

    try {
        updatedData = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        // console.log(req.body)
        // console.log(updatedData)
        res.send(updatedData)
    } catch (e) {
        res.status(404).send(e)
    }
})
router.delete('/users/:id', async (req, res) => {
    try {

        const deleteData = await User.findByIdAndDelete(req.params.id)
        if (!deleteData) {
            res.status(400).send("error")
        }
        res.send(deleteData)
    } catch (e) {
        res.status(404).send(e)

    }
})


module.exports = router