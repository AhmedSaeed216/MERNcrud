const express = require('express')
const app = express()

const mongoose = require("mongoose")

// to secure the imp info use dotenv
const dotenv = require("dotenv")
dotenv.config();

// importing the schema
const User = require("./models/userModels.js")

// importing routes
const userRoute = require("./routes/userRoute.js")

// following will convert the data to json in backend
app.use(express.json());


mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log("connected succesfully")
    })
    .catch((error) => {
        console.log("error occurs : ", error)
    })

// app.use("/api/user",userRoute)
app.use(userRoute);



app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})