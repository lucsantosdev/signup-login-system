// importing dependencies modules
const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')

// creating an express application
const app = express()

// using EJS as the view engine
app.set('view engine', 'ejs')

// static file
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

// choosing port: 3000
const port = 3000
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`)
})