// importing dependencies modules
const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')

const collection = require("./config")

// creating an express application
const app = express()

//convert data into json format (check "register user" above)
app.use(express.json())

app.use(express.urlencoded({extended: false}))

// using EJS as the view engine
app.set('view engine', 'ejs')

// static file
app.use(express.static("public"))

// rendering pages
app.get("/", (req, res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

// register user
app.post("/signup", async (req, res) => {

    const data = {
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    // user existence checking
    const existingUser = await collection.findOne({email: data.email})

    if(existingUser) {
        res.send("This email account already exists. Please choose a different email.")
    } else {
        // sending data into database
        const userdata = await collection.insertMany(data)
        console.log(userdata)
    }   
})


// choosing port: 3000
const port = 3000
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`)
})