const express = require("express");
const passport = require("passport");
const Playlist = require("../models/Playlist");
const User = require("../models/Users");
const Song = require("../models/Songs");
const router = express.Router();

//Route 1: Create a playlist

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs) {
      return res.status(301).json({ err: "Insufficient data" });
    }
    const playlistData = {
      name,
      thumbnail,
      songs,
      owner: currentUser._id,
      collaborators: [],
    };
    const playlist = await Playlist.create(playlistData);
    return res.status(200).json(playlist);
  }
);

//Route 2: Get a playlist of me
// we will get the playlist as the route parameter and we will return the playlist having that id

router.get(
  "/get/me",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const playlistId = req.user._id;

    //I need to find the playlist with the _id=playlistId
    const playlist = await Playlist.find({ owner: playlistId }).populate(
      "owner"
    );
    if (!playlist) {
      return res.status(301).json({ err: "Invalid ID" });
    }
    return res.status(200).json(playlist);
  }
);

//Route 2: Get a playlist by id
// we will get the playlist as the route parameter and we will return the playlist having that id

router.get(
  "/get/playlist/:playlistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    //This concept is called req.params
    const playlistId = req.params.playlistId;
    //I nedd to find the playlist with the _id=playlistId
    const playlist = await Playlist.findOne({ _id: playlistId }).populate({
      path: "songs",
      populate: {
        path: "artist",
      },
    });
    if (!playlist) {
      return res.status(301).json({ err: "Invalid ID" });
    }
    return res.status(200).json(playlist);
  }
);

//get all playlist made by an artist

router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const artistId = req.params.artistId;

    //we can do this to check if artist with given artistId exists
    const artist = await User.findOne({ _id: artistId });
    if (!artist) {
      return res.status(304).json({ err: "Invalid artist ID" });
    }
    const playlists = await Playlist.find({ owner: artistId });
    return res.status(200).json({ data: playlists });
  }
);

//add a song to the playlist
router.post(
  "/add/song",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { playlistId, songId } = req.body;
    //step0: get the playlist if valid
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      return res.status(304).json({ err: "Playlist doesnot exists" });
    }

    //step1: check if the current user owns the playlist or is a collaborator
    if (
      !playlist.owner.equals(currentUser._id) &&
      !playlist.collaborators.includes(currentUser._id)
    ) {
      // collaborators is storing the data in the form of array
      return res.status(400).json({ err: "Not Allowed" });
    }
    //step2: check if the song is a valid song
    const song = await Song.findOne({ _id: songId });
    if (!song) {
      return res.status(304).json({ err: "song doesnot exist" });
    }
    //step 3: we can now simply add the song to the playlist
    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
  }
);
module.exports = router;
