const mongoose = require("mongoose");
//how to create model
//step1: require a mongoose
//step2: create a user mongoose schema(structure of user)
const playlist = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "Users", // ref ma chai esma user type ko object aauxa vanerw declare gareko ho
  },
  songs: [
    // songs is made an  array to  store multiple songs to it
    {
      type: mongoose.Types.ObjectId,
      ref: "songs", // ref ma chai esma songs type ko object aauxa vanerw declare gareko ho
    },
  ],
  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
  ],
});
const playlistModel = mongoose.model("playlist", playlist);
module.exports = playlistModel;
