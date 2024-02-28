// const express = require("express");

// const app = express()

// app.get("/", (req, res) => {
//     res.send("fine")
// })

// app.listen(5000 , ()=>console.log("running"))

const userModel = require("./models/Users");
const bcrypt = require("bcrypt");

const mail = "arjun456789@gmail.com";
const password = "password";
const user = userModel.findOne({ email: mail });
const isPasswordValid = bcrypt.compare(password, user.password);
console.log(isPasswordValid);
