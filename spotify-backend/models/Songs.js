const mongoose = require("mongoose");
//how to create model
//step1: require a mongoose
//step2: create a user mongoose schema(structure of user)
const song = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  track: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Types.ObjectId, // user ko id lai store gareko ho code reuse gareko jsto vayo || objectid chai mongoose le by default dinxa harek user model ma vako data lai so hamle tei objectid through data show garinxa
    ref: "Users",
  },
});

const songModel = mongoose.model("songs", song);
module.exports = songModel;
