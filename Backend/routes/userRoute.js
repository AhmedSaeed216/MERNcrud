const express = require('express')
const mongoose = require("mongoose")
const User = require("../models/userModels.js")

const router = express.Router();


// create
router.post("/", async (req, res) => {
    // var name = req.body.name
    const { name, email, age } = req.body
    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age,
        })
        res.status(201).json(userAdded)
    } catch (error) {
        console.log("error occur while adding data :", error)
        res.send(400).json({ error: error.message })
    }
})

// get 
router.get('/', async (req, res) => {
    try {
        const showAll = await User.find()
        res.status(200).json(showAll)

    } catch (error) {
        console.log("error occur while adding data :", error)
        res.send(400).json({ error: error.message })
    }
})


// get single user
router.get('/:id', async (req, res) => {
    // use req.params to ge tthe id from url &  use req.body to get he id from input
    const { id } = req.params;
    try {
        const singleUser = await User.findById({ _id: id });
        res.status(200).json(singleUser)

    } catch (error) {
        console.log("error occur while adding data :", error)
        res.send(400).json({ error: error.message })
    }
})


// delete
router.delete('/:id', async (req, res) => {

    const { id } = req.params;
    try {
        const delUser = await User.findByIdAndDelete({ _id: id });
        res.status(200).json(delUser)

    } catch (error) {
        console.log("error occur while adding data :", error)
        res.send(400).json({ error: error.message })
    }
})


// update
router.patch('/:id', async (req, res) => {

    const { id } = req.params;
    const {name,email,age}= req.body;

    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(updateUser)

    } catch (error) {
        console.log("error occur while adding data :", error)
        res.send(400).json({ error: error.message })
    }
})


module.exports = router;