const mongoose = require("mongoose");
//how to create model
//step1: require a mongoose
//step2: create a user mongoose schema(structure of user)
const Users = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    private: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  likedSongs: {
    type: String, // further to be changed to array types
    default: "", // if there is no existence of the value then  default is used to give default value as if now it is given as empty string"" because it is of type string for now
  },
  likedPlaylists: {
    type: String, // further to be changed to array types
    default: "", // if there is no existence of the value then  default is used to give default value as if now it is given as empty string"" because it is of type string for now
  },
  subscribedArtists: {
    type: String, // further to be changed to array types
    default: "", // if there is no existence of the value then  default is used to give default value as if now it is given as empty string"" because it is of type string for now
  },
});
const Usermodel = mongoose.model("Users", Users); // .model() creates the model to database carrying the parameter as (modelname,modelschema) here model name in database for this schema is given as "Users" and the schema provided is Users.

module.exports = Usermodel;
