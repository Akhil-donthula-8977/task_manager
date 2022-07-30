const Task = require('../models/tasks.js')
const express = require('express')
const router = new express.Router()
//every async function should return a promise!
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save()
        res.send(task)
    }
    catch (e) {
        res.status(404).send(e)

    }



})
//to fetch all the users data which is in database and sending it as response as the request is get request


router.get('/tasks', async (req, res) => {
    try {
        data = await Task.find({})
        res.send(data)
    } catch (e) {
        res.status(404).send(e)
    }

})
router.get('/tasks/:id', async (req, res) => {
    const id = req.params.id
    try {
        data = await Task.findById(id)
        res.send(data)
    } catch (e) {
        res.status(404).send(e)
    }

})



router.patch('/tasks/:id', async (req, res) => {
    try {
        const update = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.send(update)
    }
    catch (e) {
        res.status(404).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {

        const deleteData = await Task.findByIdAndDelete(req.params.id)
        if (!deleteData) {
            res.status(400).send("error")
        }
        res.send(deleteData)
    } catch (e) {
        res.status(404).send(e)

    }
})
module.exports = router