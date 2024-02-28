const express = require("express");
const router = express.Router();
const passport = require("passport");
const Songs = require("../models/Songs");
const User = require("../models/Users");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // passport.authenticate("user") is a middleware that is executed after calling the /create request . basically it's main role here is  to authenticate the user's identity by identofying its token  and after this authentication only further code functions are executed
    //req.user gets the user because of passport.authenticate
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
      return res
        .status(301)
        .json({ err: "Insufficient details to create the song." });
    }
    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    const createdSong = await Songs.create(songDetails);
    return res.status(200).json(createdSong);
  }
);

//this get request is to get only those songs that are created by that user

router.get(
  "/get/mysongs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const songs = await Songs.find({ artist: req.user._id }).populate("artist");
    return res.status(200).json({ data: songs });
  }
);

//this get request is to fetch the respective songs by entering the artist id and get all the songs relased by that artist.

router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { artistId } = req.params;
    //we can check if the artist doesnot exist
    const artist = await User.findOne({ _id: artistId });
    if (!artist) {
      return res.status(301).json({ err: "Artist doesnot exists" });
    }
    const songs = await Songs.find({ artist: artistId });
    return res.status(200).json({ data: songs });
  }
);

//get a route to get a single song by its name
router.get(
  "/get/songname/:songName",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { songName } = req.params;

    const songs = await Songs.find({ name: songName }).populate("artist");
    return res.status(200).json({ data: songs });
  }
);

module.exports = router;
