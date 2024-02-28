const express = require("express");
const router = express.Router();
const Usermodel = require("../models/Users");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helper");
//This POST route will help to register
router.post("/register", async (req, res) => {
  //this code is run when the /register api is called as a POST request
  // MY req.body will be of the format {email, password, username, firstName, lastName}
  const { email, password, firstName, lastName, username } = req.body;

  //step2: does the user with same email exist? if yes throw an error

  const user = await Usermodel.findOne({ email: email });
  if (user) {
    //status code by default is 200
    return res
      .status(403)
      .json({ error: "A user with same email already exists" });
  }
  //this is a valid request
  //step3: create a new user in the db
  //step3.1: we donot store password in plain text
  //we convert the password into hash that extends into fixed length
  const hashedPassword = await bcrypt.hash(password, 10); //bcrypt is an package that we need to install using npm i bcrpyt

  const newUserData = {
    email,
    password: hashedPassword,
    firstName,
    lastName,
    username,
  };
  const newUser = await Usermodel.create(newUserData);

  //step4: we want to create a token to return to the user
  const token = await getToken(email, newUser);

  //step5: return the result to the user
  const userToReturn = { ...newUser.toJSON(), token }; // created newUser is returned to the user in the form of json adding up token to it.
  delete userToReturn.password; // we donot want to return the hashed form of password to user so we delete it.
  return res.status(200).json(userToReturn);
});

router.post("/login", async (req, res) => {
  //step1:get the email and password sent by the user from req.body
  const { email, password } = req.body;

  //step2 : check if the user with the given email exists. If not, the credentials are invalid
  const user = await Usermodel.findOne({ email: email });
  if (!user) {
    return res.status(403).json({ err: "Invalid credentials" });
  }
  //step3: check if the user exists, check if  the password is correct. if not, the credentials are invalid
  //This step is a bit tricky step. why? Because during registration of the user we have stored the password in hashed form and we donot get to know the original password and the stored hashed password cannot be converted into the original plain text password. so i cannot do as if(password == user.password)
  const isPasswordValid = await bcrypt.compare(password, user.password); // here bcrypt.compare() enabled us to compare one password in a plain text(i.e password that we recently got from the login as req,body) to a hashed password (one that is stored in a db securely)

  if (!isPasswordValid) {
    return res.status(403).json({ err: "Invalid credentials" });
  }

  //step4: if the credentials are correct then return the token to the user
  const token = await getToken(user.email, user);
  const userToReturn = { ...user.toJSON(), token };
  delete userToReturn.password;
  return res.status(200).json(userToReturn);
});

module.exports = router;
