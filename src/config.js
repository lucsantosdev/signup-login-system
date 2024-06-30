const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb://localhost:27017/signup-login-system")

// checking database connection
connect.then(() => {
    console.log("Database connected successfully.")
})
.catch(() => {
    console.log("Database cannot be connected.")
})

// schema's creation
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// collection
const collection = new mongoose.model("users", LoginSchema)

module.exports = collection